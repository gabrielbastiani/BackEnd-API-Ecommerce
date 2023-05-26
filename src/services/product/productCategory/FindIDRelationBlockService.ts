import prismaClient from '../../../prisma';

interface FindsRequest {
    relationProductCategory_id: string;
}

class FindIDRelationBlockService {
    async execute({ relationProductCategory_id }: FindsRequest) {

        // --- ID UNICA COM O RELATION --- //

        const findUniqueRelation = await prismaClient.productCategory.findUnique({
            where: {
                id: String(relationProductCategory_id)
            }
        });

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O RELATION POR DATA DESCENDENTE --- //

        const findFirstRelationDesc = await prismaClient.productCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O RELATION POR DATA ASCENDENTE --- //

        const findFirstRelationAsc = await prismaClient.productCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID DA TABELA PELO RELATION SEM ORGANIZAÇÃO --- //

        const findFirstRelation = await prismaClient.productCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA DESCENDENTE PELO RELATION --- //

        const allFindRelationDesc = await prismaClient.productCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA ASCENDENTE PELO RELATION --- //

        const allFindRelationAsc = await prismaClient.productCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL DESCENDENTE PELO RELATION --- //

        const allFindRelationNivelDesc = await prismaClient.productCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL ASCENDENTE PELO RELATION --- //

        const allFindRelationNivelAsc = await prismaClient.productCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL DESCENDENTE PELO RELATION --- //

        const findFirstRelationNivelDesc = await prismaClient.productCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL ASCENDENTE PELO RELATION --- //

        const findFirstRelationNivelAsc = await prismaClient.productCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM DESCENDENTE PELO RELATION --- //

        const findFirstRelationOrderDesc = await prismaClient.productCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                order: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM ASCENDENTE PELO RELATION --- //

        const findFirstRelationOrderAsc = await prismaClient.productCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        const data = {
            findUniqueRelation,
            findFirstRelationDesc,
            findFirstRelationAsc,
            findFirstRelation,
            allFindRelationDesc,
            allFindRelationAsc,
            allFindRelationNivelDesc,
            allFindRelationNivelAsc,
            findFirstRelationNivelDesc,
            findFirstRelationNivelAsc,
            findFirstRelationOrderDesc,
            findFirstRelationOrderAsc
        }

        return data;

    }
}

export { FindIDRelationBlockService }
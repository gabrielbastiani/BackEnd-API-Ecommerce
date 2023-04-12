import prismaClient from '../../prisma';

interface FindsRequest {
    relationProductCategory_id: string;
}

class FindIDRelationBlockService {
    async execute({ relationProductCategory_id }: FindsRequest) {

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O RELATION POR DATA DESCENDENTE --- //

        const findFirstRelationDesc = await prismaClient.relationProductCategory.findFirst({
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

        const findFirstRelationAsc = await prismaClient.relationProductCategory.findFirst({
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

        const findFirstRelation = await prismaClient.relationProductCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA DESCENDENTE PELO RELATION --- //

        const allFindRelationDesc = await prismaClient.relationProductCategory.findMany({
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

        const allFindRelationAsc = await prismaClient.relationProductCategory.findMany({
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

        const allFindRelationNivelDesc = await prismaClient.relationProductCategory.findMany({
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

        const allFindRelationNivelAsc = await prismaClient.relationProductCategory.findMany({
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

        const findFirstRelationNivelDesc = await prismaClient.relationProductCategory.findFirst({
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

        const findFirstRelationNivelAsc = await prismaClient.relationProductCategory.findFirst({
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

        const findFirstRelationOrderDesc = await prismaClient.relationProductCategory.findFirst({
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

        const findFirstRelationOrderAsc = await prismaClient.relationProductCategory.findFirst({
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
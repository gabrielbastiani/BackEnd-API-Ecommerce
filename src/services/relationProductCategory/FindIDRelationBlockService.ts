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
            }
        });

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O RELATION POR DATA ASCENDENTE --- //

        const findFirstRelationAsc = await prismaClient.relationProductCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        // --- PRIMEIRA ID DA TABELA PELO RELATION SEM ORGANIZAÇÃO --- //

        const findFirstRelation = await prismaClient.relationProductCategory.findFirst({
            where: {
                id: relationProductCategory_id
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA DESCENDENTE PELO RELATION --- //

        const allFindRelationDesc = await prismaClient.relationProductCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA ASCENDENTE PELO RELATION --- //

        const allFindRelationAsc = await prismaClient.relationProductCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL DESCENDENTE PELO RELATION --- //

        const allFindRelationNivelDesc = await prismaClient.relationProductCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'desc'
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL ASCENDENTE PELO RELATION --- //

        const allFindRelationNivelAsc = await prismaClient.relationProductCategory.findMany({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'asc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL DESCENDENTE PELO RELATION --- //

        const findFirstRelationNivelDesc = await prismaClient.relationProductCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'desc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL ASCENDENTE PELO RELATION --- //

        const findFirstRelationNivelAsc = await prismaClient.relationProductCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                nivel: 'asc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM DESCENDENTE PELO RELATION --- //

        const findFirstRelationOrderDesc = await prismaClient.relationProductCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                order: 'desc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM ASCENDENTE PELO RELATION --- //

        const findFirstRelationOrderAsc = await prismaClient.relationProductCategory.findFirst({
            where: {
                id: relationProductCategory_id
            },
            orderBy: {
                order: 'asc'
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
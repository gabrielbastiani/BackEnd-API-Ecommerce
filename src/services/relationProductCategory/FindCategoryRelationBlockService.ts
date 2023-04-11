import prismaClient from '../../prisma';

interface FindsRequest {
    product_id: string;
}

class FindCategoryRelationBlockService {
    async execute({ product_id }: FindsRequest) {

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O PRODUTO POR DATA DESCENDENTE --- //

        const findFirstDesc = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O PRODUTO POR DATA ASCENDENTE --- //

        const findFirstAsc = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        // --- PRIMEIRA ID DA TABELA PELO PRODUTO SEM ORGANIZAÇÃO --- //

        const findFirstProduct = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA DESCENDENTE PELO PRODUTO --- //

        const allFindDesc = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA ASCENDENTE PELO PRODUTO --- //

        const allFindAsc = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id,
                relationId: ""
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL DESCENDENTE PELO PRODUTO --- //

        const allFindNivelDesc = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                nivel: 'desc'
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL ASCENDENTE PELO PRODUTO --- //

        const allFindNivelAsc = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                nivel: 'asc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL DESCENDENTE PELO PRODUTO --- //

        const findFirstNivelDesc = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id
            },
            orderBy: {
                nivel: 'desc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL ASCENDENTE PELO PRODUTO --- //

        const findFirstNivelAsc = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id
            },
            orderBy: {
                nivel: 'asc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM DESCENDENTE PELO PRODUTO --- //

        const findFirstOrderDesc = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id
            },
            orderBy: {
                order: 'desc'
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM ASCENDENTE PELO PRODUTO --- //

        const findFirstOrderAsc = await prismaClient.relationProductCategory.findFirst({
            where: {
                product_id: product_id
            },
            orderBy: {
                order: 'asc'
            }
        });

        const data = {
            findFirstDesc,
            findFirstAsc,
            findFirstProduct,
            allFindDesc,
            allFindAsc,
            allFindNivelDesc,
            allFindNivelAsc,
            findFirstNivelDesc,
            findFirstNivelAsc,
            findFirstOrderDesc,
            findFirstOrderAsc
        }

        return data;

    }
}

export { FindCategoryRelationBlockService }
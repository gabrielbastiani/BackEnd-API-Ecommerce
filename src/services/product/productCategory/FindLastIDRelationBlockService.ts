import prismaClient from '../../../prisma';

interface FindsRequest {
    parentId: string;
}

class FindLastIDRelationBlockService {
    async execute({ parentId }: FindsRequest) {

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O ID DE RELAÇÂO POR DATA DESCENDENTE --- //

        const findFirstRelationIDDesc = await prismaClient.productCategory.findFirst({
            where: {
                parentId: parentId
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID DA TABELA ORGANIZADAS COM O ID DE RELAÇÂO POR DATA ASCENDENTE --- //

        const findFirstRelationIDAsc = await prismaClient.productCategory.findFirst({
            where: {
                parentId: parentId
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID DA TABELA PELO ID DE RELAÇÂO SEM ORGANIZAÇÃO --- //

        const findFirstRelationID = await prismaClient.productCategory.findFirst({
            where: {
                parentId: parentId
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA DESCENDENTE PELO ID DE RELAÇÂO --- //

        const allFindRelationIDDesc = await prismaClient.productCategory.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR DATA ASCENDENTE PELO ID DE RELAÇÂO --- //

        const allFindRelationIDAsc = await prismaClient.productCategory.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL DESCENDENTE PELO ID DE RELAÇÂO --- //

        const allFindRelationIDNivelDesc = await prismaClient.productCategory.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                nivel: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODA TABELA ORGANIZADA POR NIVEL ASCENDENTE PELO ID DE RELAÇÂO --- //

        const allFindRelationIDNivelAsc = await prismaClient.productCategory.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                nivel: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL DESCENDENTE PELO ID DE RELAÇÂO --- //

        const findFirstRelationIDNivelDesc = await prismaClient.productCategory.findFirst({
            where: {
                parentId: parentId
            },
            orderBy: {
                nivel: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR NIVEL ASCENDENTE PELO ID DE RELAÇÂO --- //

        const findFirstRelationIDNivelAsc = await prismaClient.productCategory.findFirst({
            where: {
                parentId: parentId
            },
            orderBy: {
                nivel: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM DESCENDENTE PELO ID DE RELAÇÂO --- //

        const findFirstRelationIDOrderDesc = await prismaClient.productCategory.findFirst({
            where: {
                parentId: parentId
            },
            orderBy: {
                order: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- PRIMEIRA ID ORGANIZADA POR ORDEM ASCENDENTE PELO ID DE RELAÇÂO --- //

        const findFirstRelationIDOrderAsc = await prismaClient.productCategory.findFirst({
            where: {
                parentId: parentId
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODOS ID ORGANIZADA POR ORDEM DESCENDENTE PELO ID DE RELAÇÂO --- //

        const allRelationIDOrderDesc = await prismaClient.productCategory.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                order: 'desc'
            },
            include: {
                product: true,
                category: true
            }
        });

        // --- TODOS ID ORGANIZADA POR ORDEM ASCENDENTE PELO ID DE RELAÇÂO --- //

        const allRelationIDOrderAsc = await prismaClient.productCategory.findMany({
            where: {
                parentId: parentId
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        const allRelation = await prismaClient.productCategory.findMany({
            include: {
                product: true,
                category: true
            }
        });

        const data = {
            findFirstRelationIDDesc,
            findFirstRelationIDAsc,
            findFirstRelationID,
            allFindRelationIDDesc,
            allFindRelationIDAsc,
            allFindRelationIDNivelDesc,
            allFindRelationIDNivelAsc,
            findFirstRelationIDNivelDesc,
            findFirstRelationIDNivelAsc,
            findFirstRelationIDOrderDesc,
            findFirstRelationIDOrderAsc,
            allRelationIDOrderDesc,
            allRelationIDOrderAsc,
            allRelation
        }

        return data;

    }
}

export { FindLastIDRelationBlockService }
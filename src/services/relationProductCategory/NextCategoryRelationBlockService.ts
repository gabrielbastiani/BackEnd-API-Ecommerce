import prismaClient from '../../prisma';

class NextCategoryRelationBlockService {
    async execute(page = 1, limit = 1, product_id) {

        const skip = limit * (page - 1);

        const allRelations = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const relations = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        const relationsIDs = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            relations,
            relationsIDs,
            total: allRelations.length,
            total_pages: Math.ceil(allRelations.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { NextCategoryRelationBlockService }
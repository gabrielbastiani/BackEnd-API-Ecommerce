import prismaClient from '../../../prisma';

class PageRelationAttributeProductService {
    async execute(page = 1, limit = 10) {

        const skip = limit * (page - 1);

        const allFindAsc = await prismaClient.relationAttributeProduct.findMany({
            orderBy: {
                order: 'asc'
            },
            include: {
                _count: true,
                imageattributes: true,
                product: true,
                store: true,
                typeAttribute: true
            }
        });

        const allFindAttributes = await prismaClient.relationAttributeProduct.findMany({
            orderBy: {
                order: 'asc'
            },
            include: {
                _count: true,
                imageattributes: true,
                product: true,
                store: true,
                typeAttribute: true
            },
            skip,
            take: limit
        });

        const data = {
            allFindAttributes,
            total: allFindAsc.length,
            total_pages: Math.ceil(allFindAsc.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageRelationAttributeProductService }
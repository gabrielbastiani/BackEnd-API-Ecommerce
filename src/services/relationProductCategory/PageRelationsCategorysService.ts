import prismaClient from '../../prisma';

class PageRelationsCategorysService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allFindAsc = await prismaClient.relationProductCategory.findMany({
            where: {
                relationId: ""
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        const allFindAscCategorys = await prismaClient.relationProductCategory.findMany({
            where: {
                relationId: ""
            },
            orderBy: {
                created_at: 'asc'
            },
            include: {
                product: true,
                category: true
            },
            skip,
            take: limit
        });

        const data = {
            allFindAsc,
            total: allFindAscCategorys.length,
            total_pages: Math.ceil(allFindAscCategorys.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageRelationsCategorysService }
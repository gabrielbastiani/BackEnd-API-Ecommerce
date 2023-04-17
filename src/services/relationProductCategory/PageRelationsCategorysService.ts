import prismaClient from '../../prisma';

class PageRelationsCategorysService {
    async execute(page = 1, limit = 5, category_id: string) {

        const skip = limit * (page - 1);

        const allFindAsc = await prismaClient.relationProductCategory.findMany({
            where: {
                category_id: category_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                category: true
            }
        });

        const allFindAscCategorys = await prismaClient.relationProductCategory.findMany({
            where: {
                category_id: category_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: true,
                category: true
            },
            skip,
            take: limit
        });

        const data = {
            allFindAscCategorys,
            total: allFindAsc.length,
            total_pages: Math.ceil(allFindAsc.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageRelationsCategorysService }
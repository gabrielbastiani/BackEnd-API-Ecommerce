import prismaClient from '../../../prisma';

class PageRelationsCategorysService {
    async execute(page = 1, limit = 10, category_id: string) {

        const skip = limit * (page - 1);

        const allFindAsc = await prismaClient.productCategory.findMany({
            where: {
                category: {
                    id: category_id
                }
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                product: true,
                store: true
            }
        });

        const allFindAscCategorys = await prismaClient.productCategory.findMany({
            where: {
                category: {
                    id: category_id
                }
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                product: true,
                store: true
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
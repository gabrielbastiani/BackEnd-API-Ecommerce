import prismaClient from '../../prisma';

class ExactPageListAllCategorysService {
    async execute(page = 1, limit = 5, category_id: string) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            where: {
                id: category_id
            },
            orderBy: {
                created_at: 'asc'
            }
        });

        const categorys = await prismaClient.category.findMany({
            where: {
                id: category_id
            },
            orderBy: {
                created_at: 'asc'
            },
            skip,
            take: limit
        });

        const data = {
            categorys,
            total: categorysAll.length,
            total_pages: Math.ceil(categorysAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ExactPageListAllCategorysService }
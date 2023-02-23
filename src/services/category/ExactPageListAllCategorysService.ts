import prismaClient from '../../prisma';

class ExactPageListAllCategorysService {
    async execute(page = 1, limit = 5, category_id: string) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            where: {
                id: category_id
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                loja: true,
                products: true,
            }
        });

        const categorys = await prismaClient.category.findMany({
            where: {
                id: category_id
            },
            include: {
                loja: true,
                products: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
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
import prismaClient from '../../prisma';

class ListExactCategoryNameService {
    async execute(page = 1, limit = 21, slug) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            where: {
                slug: slug
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
                slug: slug
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

        const findUnique = await prismaClient.category.findUnique({
            where: {
                slug: slug
            },
            include: {
                loja: true,
                products: true,
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            categorys,
            findUnique,
            total: categorysAll.length,
            total_pages: Math.ceil(categorysAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ListExactCategoryNameService }
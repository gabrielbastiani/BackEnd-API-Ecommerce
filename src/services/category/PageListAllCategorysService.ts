import prismaClient from '../../prisma';

class PageListAllCategorysService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            include: {
                product: true,
                subcategories: true
            },
            orderBy: {
                order: 'asc'
            }
        });

        const categorys = await prismaClient.category.findMany({
            include: {
                product: true,
                subcategories: true
            },
            orderBy: {
                order: 'asc'
            },
            skip,
            take: limit
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

export { PageListAllCategorysService }
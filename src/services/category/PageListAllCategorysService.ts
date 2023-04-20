import prismaClient from '../../prisma';

class PageListAllCategorysService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            orderBy: {
                order: 'asc'
            },
            include: {
                relationproductcategories: true,
                imagecategories: true
            }
        });

        const categorys = await prismaClient.category.findMany({
            orderBy: {
                order: 'asc'
            },
            include: {
                relationproductcategories: true,
                imagecategories: true
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
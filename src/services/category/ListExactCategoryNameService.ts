import prismaClient from '../../prisma';

class ListExactCategoryNameService {
    async execute(page = 1, limit = 21, slug) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            where: {
                slug: slug
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                groupcategories: true,
                imagecategories: true,
                relationproductcategories: true
            }
        });

        const categorys = await prismaClient.category.findMany({
            where: {
                slug: slug
            },
            include: {
                groupcategories: true,
                imagecategories: true,
                relationproductcategories: true
            },
            skip,
            take: limit
        });

        const findFirst = await prismaClient.category.findFirst({
            where: {
                slug: slug
            },
            include: {
                groupcategories: true,
                imagecategories: true,
                relationproductcategories: true
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            categorys,
            findFirst,
            total: categorysAll.length,
            total_pages: Math.ceil(categorysAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ListExactCategoryNameService }
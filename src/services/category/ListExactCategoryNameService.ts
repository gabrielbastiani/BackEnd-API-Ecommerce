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

        const data = {
            categorys,
            total: categorysAll.length,
            total_pages: Math.ceil(categorysAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ListExactCategoryNameService }
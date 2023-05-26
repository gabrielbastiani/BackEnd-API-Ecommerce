import prismaClient from '../../prisma';

class PageListAllCategorysService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const categorysAll = await prismaClient.category.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                filtercategories: true,
                imagecategories: true,
                menucategories: true,
                productcategories: true
            }
        });

        const categorys = await prismaClient.category.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                filtercategories: true,
                imagecategories: true,
                menucategories: true,
                productcategories: true
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

export { PageListAllCategorysService }
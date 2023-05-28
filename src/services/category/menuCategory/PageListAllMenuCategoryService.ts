import prismaClient from '../../../prisma';

class PageListAllMenuCategoryService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const menuAll = await prismaClient.menuCategory.findMany({
            where: {
                categoryName: ""
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                imagemenucategories: true
            }
        });

        const menus = await prismaClient.menuCategory.findMany({
            where: {
                categoryName: ""
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                imagemenucategories: true
            },
            skip,
            take: limit
        });

        const data = {
            menus,
            total: menuAll.length,
            total_pages: Math.ceil(menuAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllMenuCategoryService }
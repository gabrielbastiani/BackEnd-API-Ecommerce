import prismaClient from '../../../prisma';

class PageListAllGroupsCategoriesService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const gruopsAll = await prismaClient.menuCategory.findMany({
            where: {
                itemName: ""
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                imagegroupcategories: true
            }
        });

        const gruops = await prismaClient.menuCategory.findMany({
            where: {
                itemName: ""
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                imagegroupcategories: true
            },
            skip,
            take: limit
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            gruops,
            total: gruopsAll.length,
            total_pages: Math.ceil(gruopsAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageListAllGroupsCategoriesService }
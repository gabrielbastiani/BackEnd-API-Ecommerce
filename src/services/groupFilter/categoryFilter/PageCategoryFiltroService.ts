import prismaClient from '../../../prisma';

class PageCategoryFiltroService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const filtroAll = await prismaClient.filterCategory.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                groupFilter: true,
                imageFilterCategory: true
            }
        });

        const filtrosCategories = await prismaClient.filterCategory.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                groupFilter: true,
                imageFilterCategory: true
            },
            skip,
            take: limit
        });

        const data = {
            filtrosCategories,
            total: filtroAll.length,
            total_pages: Math.ceil(filtroAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageCategoryFiltroService }
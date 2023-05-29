import prismaClient from '../../../prisma';

class PageFilterCategoryService {
    async execute(page = 1, limit = 999999) {

        const skip = limit * (page - 1);

        const filterAll = await prismaClient.filterCategory.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                groupFilter: true,
                imageFilterCategories: true
            }
        });

        const categoriesFilter = await prismaClient.filterCategory.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
                groupFilter: true,
                imageFilterCategories: true
            },
            skip,
            take: limit
        });

        const data = {
            categoriesFilter,
            total: filterAll.length,
            total_pages: Math.ceil(filterAll.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageFilterCategoryService }
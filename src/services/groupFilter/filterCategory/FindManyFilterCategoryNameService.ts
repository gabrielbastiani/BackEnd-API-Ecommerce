import prismaClient from '../../../prisma';

interface FilterCategoryRequest {
    groupFilter_id: string;
}

class FindManyFilterCategoryNameService {
    async execute({ groupFilter_id }: FilterCategoryRequest) {
        const categoryFilter = await prismaClient.filterCategory.findMany({
            where: {
                groupFilter_id: groupFilter_id
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                groupFilter: true,
                imageFilterCategories: true
            }
        });

        return categoryFilter;

    }
}

export { FindManyFilterCategoryNameService }
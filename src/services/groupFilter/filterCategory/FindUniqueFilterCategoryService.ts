import prismaClient from '../../../prisma';

interface FilterAttributeRequest {
    filterCategory_id: string;
}

class FindUniqueFilterCategoryService {
    async execute({ filterCategory_id }: FilterAttributeRequest) {
        const filter = await prismaClient.filterCategory.findUnique({
            where: {
                id: filterCategory_id
            },
            include: {
                category: true,
                groupFilter: true,
                imageFilterCategories: true
            }
        });

        return filter;

    }
}

export { FindUniqueFilterCategoryService }
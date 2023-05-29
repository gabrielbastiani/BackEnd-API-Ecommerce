import prismaClient from "../../../prisma";

interface FilterCategoryRequest {
    filterCategory_id: string;
    order: number;
}

class UpdateCategoryOrderFilterService {
    async execute({ order, filterCategory_id }: FilterCategoryRequest) {
        const filter = await prismaClient.filterCategory.update({
            where: {
                id: filterCategory_id
            },
            data: {
                order: order,
            }
        });

        return filter;

    }
}

export { UpdateCategoryOrderFilterService }
import prismaClient from "../../../prisma";

interface FilterCategoryRequest {
    filterCategory_id: string;
    name: string;
}

class UpdateCategoryNameFilterCategoryService {
    async execute({ name, filterCategory_id }: FilterCategoryRequest) {
        const filter = await prismaClient.filterCategory.update({
            where: {
                id: filterCategory_id
            },
            data: {
                name: name,
            }
        });

        return filter;

    }
}

export { UpdateCategoryNameFilterCategoryService }
import prismaClient from "../../../prisma";

interface FilterCategoryRequest {
    filterCategory_id: string;
}

class DeleteFilterCategoryService {
    async execute({ filterCategory_id }: FilterCategoryRequest) {
        const filter = await prismaClient.filterCategory.delete({
            where: {
                id: filterCategory_id
            }
        });

        return filter;

    }
}

export { DeleteFilterCategoryService }
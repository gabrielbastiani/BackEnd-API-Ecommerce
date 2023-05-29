import prismaClient from "../../../prisma";

interface FilterCategoryRequest {
    filterCategory_id: string;
    groupFilter_id: string;
}

class UpdateNameFilterGroupService {
    async execute({ groupFilter_id, filterCategory_id }: FilterCategoryRequest) {
        const filter = await prismaClient.filterCategory.update({
            where: {
                id: filterCategory_id
            },
            data: {
                groupFilter_id: groupFilter_id,
            }
        });

        return filter;

    }
}

export { UpdateNameFilterGroupService }
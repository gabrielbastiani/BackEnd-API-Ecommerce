import prismaClient from "../../../prisma";

interface FilterCategoryRequest {
    groupFilter_id: string;
    name: string;
    order: number;
    store_id: string;
}

class CreateFilterCategoryService {
    async execute({ groupFilter_id, name, order, store_id }: FilterCategoryRequest) {
        const filterCategory = await prismaClient.filterCategory.create({
            data: {
                groupFilter_id: groupFilter_id,
                name: name,
                order: order,
                store_id: store_id
            }
        });

        return filterCategory;

    }
}

export { CreateFilterCategoryService }
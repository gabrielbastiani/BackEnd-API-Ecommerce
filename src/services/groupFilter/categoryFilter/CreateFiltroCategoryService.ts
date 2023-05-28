import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
    groupFilter_id: string;
    name: string;
    order: number;
    slugCategory: string;
    store_id: string;
}

class CreateFiltroCategoryService {
    async execute({ groupFilter_id, slugCategory, name, order, store_id }: FiltroCategoryRequest) {
        const filterCategory = await prismaClient.filterCategory.create({
            data: {
                groupFilter_id: groupFilter_id,
                name: name,
                order: order,
                slugCategory: slugCategory,
                store_id: store_id
            }
        });

        return filterCategory;

    }
}

export { CreateFiltroCategoryService }
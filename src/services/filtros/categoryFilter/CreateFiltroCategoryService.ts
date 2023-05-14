import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
    groupFilter_id: string;
    categoryName: string;
    order: number;
    loja_id: string;
}

class CreateFiltroCategoryService {
    async execute({ groupFilter_id, categoryName, order, loja_id }: FiltroCategoryRequest) {
        const filterCategory = await prismaClient.filterCategory.create({
            data: {
                groupFilter_id: groupFilter_id,
                categoryName: categoryName,
                order: order,
                loja_id: loja_id
            }
        });

        return filterCategory;

    }
}

export { CreateFiltroCategoryService }
import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
    nameGroup: string;
    categoryName: string;
    order: number;
    loja_id: string;
}

class CreateFiltroCategoryService {
    async execute({ nameGroup, categoryName, order, loja_id }: FiltroCategoryRequest) {
        const filterCategory = await prismaClient.filterCategory.create({
            data: {
                nameGroup: nameGroup,
                categoryName: categoryName,
                order: order,
                loja_id: loja_id
            }
        });

        return filterCategory;

    }
}

export { CreateFiltroCategoryService }
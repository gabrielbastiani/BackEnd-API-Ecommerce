import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
    filterCategory_id: string;
    categoryName: string;
}

class UpdateCategoryNameFiltroService {
    async execute({ categoryName, filterCategory_id }: FiltroCategoryRequest) {
        const filter = await prismaClient.filterCategory.update({
            where: {
                id: filterCategory_id
            },
            data: {
                categoryName: categoryName,
            }
        });

        return filter;

    }
}

export { UpdateCategoryNameFiltroService }
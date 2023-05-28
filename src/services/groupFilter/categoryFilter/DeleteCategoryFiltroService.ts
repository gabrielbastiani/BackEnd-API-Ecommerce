import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
    filterCategory_id: string;
}

class DeleteCategoryFiltroService {
    async execute({ filterCategory_id }: FiltroCategoryRequest) {
        const filter = await prismaClient.filterCategory.delete({
            where: {
                id: filterCategory_id
            }
        });

        return filter;

    }
}

export { DeleteCategoryFiltroService }
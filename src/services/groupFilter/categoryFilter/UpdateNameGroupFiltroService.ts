import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
    filterCategory_id: string;
    groupFilter_id: string;
}

class UpdateNameGroupFiltroService {
    async execute({ groupFilter_id, filterCategory_id }: FiltroCategoryRequest) {
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

export { UpdateNameGroupFiltroService }
import prismaClient from "../../../prisma";

interface FiltroCategoryRequest {
    filterCategory_id: string;
    nameGroup: string;
}

class UpdateNameGroupFiltroService {
    async execute({ nameGroup, filterCategory_id }: FiltroCategoryRequest) {
        const filter = await prismaClient.filterCategory.update({
            where: {
                id: filterCategory_id
            },
            data: {
                nameGroup: nameGroup,
            }
        });

        return filter;

    }
}

export { UpdateNameGroupFiltroService }
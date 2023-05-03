import prismaClient from "../../../prisma";

interface FilterRequest {
    groupFilterAtributo_id: string;
    slugCategoryOrItem: string;
}

class UpdateSlugCategoryGrupoFiltroService {
    async execute({
        groupFilterAtributo_id,
        slugCategoryOrItem,
    }: FilterRequest) {
        const updateSlug = await prismaClient.groupFilterAtributo.update({
            where: {
                id: groupFilterAtributo_id
            },
            data: {
                slugCategoryOrItem: slugCategoryOrItem
            }
        });

        return updateSlug;

    }
}

export { UpdateSlugCategoryGrupoFiltroService }
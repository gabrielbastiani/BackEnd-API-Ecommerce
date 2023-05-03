import prismaClient from "../../../prisma";

interface FilterRequest {
    groupFilterAtributo_id: string;
    nameGroup: string;
}

class UpdateNameGrupoFiltroService {
    async execute({
        groupFilterAtributo_id,
        nameGroup,
    }: FilterRequest) {
        const updateName = await prismaClient.groupFilterAtributo.update({
            where: {
                id: groupFilterAtributo_id
            },
            data: {
                nameGroup: nameGroup
            }
        });

        return updateName;

    }
}

export { UpdateNameGrupoFiltroService }
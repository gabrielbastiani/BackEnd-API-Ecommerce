import prismaClient from "../../../prisma";

interface AtributoRequest {
    groupFilterAtributo_id: string;
    atributo_id: string;
}

class UpdateAtributoValorService {
    async execute({
        groupFilterAtributo_id,
        atributo_id,
    }: AtributoRequest) {
        const updateItemGrupo = await prismaClient.groupFilterAtributo.update({
            where: {
                id: groupFilterAtributo_id
            },
            data: {
                atributo_id: atributo_id
            }
        });

        return updateItemGrupo;

    }
}

export { UpdateAtributoValorService }
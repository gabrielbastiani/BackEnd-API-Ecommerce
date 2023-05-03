import prismaClient from "../../../prisma";

interface GroupsRequest {
    groupFilterAtributo_id: string;
}

class DeleteGroupsIDFiltroService {
    async execute({ groupFilterAtributo_id }: GroupsRequest) {

        const idNivel = await prismaClient.groupFilterAtributo.findUnique({
            where: {
                id: groupFilterAtributo_id
            }
        });

        const idNivelRelations = await prismaClient.groupFilterAtributo.findMany();
        const idsRelat = idNivelRelations.map((item) => item.groupId);

        const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

        if (filtrado.length >= 1) {
            throw new Error("Delete as categorias filhas desta de trás para frente antes!!!");
        }

        const relation = await prismaClient.groupFilterAtributo.delete({
            where: {
                id: groupFilterAtributo_id
            }
        });

        return relation;

    }
}

export { DeleteGroupsIDFiltroService }
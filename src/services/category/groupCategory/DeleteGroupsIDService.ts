import prismaClient from "../../../prisma";

interface GroupsRequest {
    groupCategoy_id: string;
}

class DeleteGroupsIDService {
    async execute({ groupCategoy_id }: GroupsRequest) {

        const idNivel = await prismaClient.groupCategoy.findUnique({
            where: {
                id: groupCategoy_id
            }
        });

        const idNivelRelations = await prismaClient.groupCategoy.findMany();
        const idsRelat = idNivelRelations.map((item) => item.groupId);

        const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

        if (filtrado.length >= 1) {
            throw new Error("Delete as categorias filhas desta de trás para frente antes!!!");
        }

        const relation = await prismaClient.groupCategoy.delete({
            where: {
                id: groupCategoy_id
            }
        });

        return relation;

    }
}

export { DeleteGroupsIDService }
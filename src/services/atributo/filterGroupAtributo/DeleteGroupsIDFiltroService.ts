import prismaClient from "../../../prisma";

interface GroupRequest {
    groupFilterAtributo_id: string;
}

class DeleteGroupsIDFiltroService {
    async execute({ groupFilterAtributo_id }: GroupRequest) {

        const idNivel = await prismaClient.groupFilterAtributo.findUnique({
            where: {
                id: groupFilterAtributo_id
            }
        });

        const idNivelRelations = await prismaClient.groupFilterAtributo.findMany();
        const idsRelat = idNivelRelations.map((item) => item.groupId);

        const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

        if (String(filtrado) === idNivel.id) {
            throw new Error("Delete os filtros desse grupo filhos desta de trás para frente antes!!!");
        }

        const groups = await prismaClient.groupFilterAtributo.delete({
            where: {
                id: groupFilterAtributo_id
            }
        });

        return groups;

    }
}

export { DeleteGroupsIDFiltroService }
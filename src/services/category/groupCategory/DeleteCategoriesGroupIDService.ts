import prismaClient from "../../../prisma";

interface GroupRequest {
    groupCategoy_id: string;
}

class DeleteCategoriesGroupIDService {
    async execute({ groupCategoy_id }: GroupRequest) {

        const idNivel = await prismaClient.menuCategory.findUnique({
            where: {
                id: groupCategoy_id
            }
        });

        const idNivelRelations = await prismaClient.menuCategory.findMany();
        const idsRelat = idNivelRelations.map((item) => item.groupId);

        const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

        if (String(filtrado) === idNivel.id) {
            throw new Error("Delete as categorias/itens desse grupo filhas desta de trás para frente antes!!!");
        }

        const groups = await prismaClient.menuCategory.delete({
            where: {
                id: groupCategoy_id
            }
        });

        return groups;

    }
}

export { DeleteCategoriesGroupIDService }
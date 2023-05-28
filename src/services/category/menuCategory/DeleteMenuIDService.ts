import prismaClient from "../../../prisma";

interface GroupsRequest {
    menuCategory_id: string;
}

class DeleteMenuIDService {
    async execute({ menuCategory_id }: GroupsRequest) {

        const idNivel = await prismaClient.menuCategory.findUnique({
            where: {
                id: menuCategory_id
            }
        });

        const idNivelRelations = await prismaClient.menuCategory.findMany();
        const idsRelat = idNivelRelations.map((item) => item.parentId);

        const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

        if (filtrado.length >= 1) {
            throw new Error("Delete as categorias filhas destá, de trás para frente antes!!!");
        }

        const menu = await prismaClient.menuCategory.delete({
            where: {
                id: menuCategory_id
            }
        });

        return menu;

    }
}

export { DeleteMenuIDService }
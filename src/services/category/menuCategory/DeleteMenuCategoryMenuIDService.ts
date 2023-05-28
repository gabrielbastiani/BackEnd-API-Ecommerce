import prismaClient from "../../../prisma";

interface MenuCategoryRequest {
    menuCategory_id: string;
}

class DeleteMenuCategoryMenuIDService {
    async execute({ menuCategory_id }: MenuCategoryRequest) {

        const idNivel = await prismaClient.menuCategory.findUnique({
            where: {
                id: menuCategory_id
            }
        });

        const idNivelRelations = await prismaClient.menuCategory.findMany();
        const idsRelat = idNivelRelations.map((item) => item.parentId);

        const filtrado = idsRelat.filter(function (obj) { return idNivel.id === obj });

        if (String(filtrado) === idNivel.id) {
            throw new Error("Delete as categorias desse menu filhas destá, de trás para frente antes!!!");
        }

        const menus = await prismaClient.menuCategory.delete({
            where: {
                id: menuCategory_id
            }
        });

        return menus;

    }
}

export { DeleteMenuCategoryMenuIDService }
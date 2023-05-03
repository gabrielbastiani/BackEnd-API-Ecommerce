import prismaClient from "../../../prisma";

interface AtributoRequest {
    groupFilterAtributo_id: string;
    order: number;
}

class UpdateOrderFiltroGrupoAtributoService {
    async execute({
        groupFilterAtributo_id,
        order,
    }: AtributoRequest) {
        const updateOrder = await prismaClient.groupFilterAtributo.update({
            where: {
                id: groupFilterAtributo_id
            },
            data: {
                order: order
            }
        })

        return updateOrder;

    }
}

export { UpdateOrderFiltroGrupoAtributoService }
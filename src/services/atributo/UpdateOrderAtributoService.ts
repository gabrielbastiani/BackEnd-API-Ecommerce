import prismaClient from "../../prisma";

interface AtributoRequest {
    atributo_id: string;
    order: number;
}

class UpdateOrderAtributoService {
    async execute({
        atributo_id,
        order,
    }: AtributoRequest) {
        const updateOrder = await prismaClient.atributo.update({
            where: {
                id: atributo_id
            },
            data: {
                order: order
            }
        })

        return updateOrder;

    }
}

export { UpdateOrderAtributoService }
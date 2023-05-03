import prismaClient from "../../../prisma";

interface AtributoRequest {
    relationProductAtributo_id: string;
    order: number;
}

class UpdateOrderAtributoRelationService {
    async execute({
        relationProductAtributo_id,
        order,
    }: AtributoRequest) {
        const updateOrder = await prismaClient.relationProductAtributo.update({
            where: {
                id: relationProductAtributo_id
            },
            data: {
                order: order
            }
        })

        return updateOrder;

    }
}

export { UpdateOrderAtributoRelationService }
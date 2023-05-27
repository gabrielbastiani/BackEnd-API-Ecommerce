import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
    order: number;
}

class UpdateOrderRelationAttributeProductService {
    async execute({
        relationAttributeProduct_id,
        order,
    }: RelationAttributeProductRequest) {
        const updateOrder = await prismaClient.relationAttributeProduct.update({
            where: {
                id: relationAttributeProduct_id
            },
            data: {
                order: order
            }
        })

        return updateOrder;

    }
}

export { UpdateOrderRelationAttributeProductService }
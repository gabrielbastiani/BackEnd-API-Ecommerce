import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
    type: string;
    order: number;
    store_id: string;
}

class CreateRelationAttributeProductServices {
    async execute({
        product_id,
        type,
        order,
        store_id
    }: RelationAttributeProductRequest) {
        const relation = await prismaClient.relationAttributeProduct.create({
            data: {
                product_id: product_id,
                type: type,
                order: Number(order),
                store_id: store_id
            }
        });

        return relation;

    }
}

export { CreateRelationAttributeProductServices }
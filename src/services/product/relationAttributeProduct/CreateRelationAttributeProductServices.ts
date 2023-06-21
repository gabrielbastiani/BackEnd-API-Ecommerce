import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
    type: string;
    valueAttribute_id: string;
    order: number;
    store_id: string;
}

class CreateRelationAttributeProductServices {
    async execute({
        product_id,
        type,
        valueAttribute_id,
        order,
        store_id
    }: RelationAttributeProductRequest) {
        const relation = await prismaClient.relationAttributeProduct.create({
            data: {
                product_id: product_id,
                type: type,
                valueAttribute_id: valueAttribute_id,
                order: Number(order),
                store_id: store_id
            }
        });

        return relation;

    }
}

export { CreateRelationAttributeProductServices }
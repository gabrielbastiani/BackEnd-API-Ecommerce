import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    product_id: string;
    type: string;
    value: string;
    order: number;
    nivel: number;
    parentId: string;
    store_id: string;
}

class CreateRelationAttributeProductServices {
    async execute({
        product_id,
        type,
        value,
        order,
        nivel,
        parentId,
        store_id
    }: RelationAttributeProductRequest) {

        const relation = await prismaClient.relationAttributeProduct.create({
            data: {
                product_id: product_id,
                type: type,
                value: value,
                order: Number(order),
                nivel: nivel,
                parentId: parentId,
                store_id: store_id
            }
        });

        return relation;

    }
}

export { CreateRelationAttributeProductServices }
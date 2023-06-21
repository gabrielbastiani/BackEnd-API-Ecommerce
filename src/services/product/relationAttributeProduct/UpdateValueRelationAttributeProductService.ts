import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
    valueAttribute_id: string;
}

class UpdateValueRelationAttributeProductService {
    async execute({
        relationAttributeProduct_id,
        valueAttribute_id,
    }: RelationAttributeProductRequest) {
        const updateValue = await prismaClient.relationAttributeProduct.update({
            where: {
                id: relationAttributeProduct_id
            },
            data: {
                valueAttribute_id: valueAttribute_id
            }
        })

        return updateValue;

    }
}

export { UpdateValueRelationAttributeProductService }
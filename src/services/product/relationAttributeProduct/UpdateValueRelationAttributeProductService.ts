import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
    value: string;
}

class UpdateValueRelationAttributeProductService {
    async execute({
        relationAttributeProduct_id,
        value,
    }: RelationAttributeProductRequest) {
        const updateAttribute = await prismaClient.relationAttributeProduct.update({
            where: {
                id: relationAttributeProduct_id
            },
            data: {
                value: value
            }
        })

        return updateAttribute;

    }
}

export { UpdateValueRelationAttributeProductService }
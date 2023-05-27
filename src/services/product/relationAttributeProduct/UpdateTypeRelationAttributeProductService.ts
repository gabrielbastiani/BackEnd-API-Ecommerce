import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
    type: string;
}

class UpdateTypeRelationAttributeProductService {
    async execute({
        relationAttributeProduct_id,
        type,
    }: RelationAttributeProductRequest) {
        const updateAttribute = await prismaClient.relationAttributeProduct.update({
            where: {
                id: relationAttributeProduct_id
            },
            data: {
                type: type
            }
        })

        return updateAttribute;

    }
}

export { UpdateTypeRelationAttributeProductService }
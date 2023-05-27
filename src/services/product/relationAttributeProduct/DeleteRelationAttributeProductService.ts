import prismaClient from "../../../prisma";

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
}

class DeleteRelationAttributeProductService {
    async execute({ relationAttributeProduct_id }: RelationAttributeProductRequest) {
        const relationAttributo = await prismaClient.relationAttributeProduct.delete({
            where: {
                id: relationAttributeProduct_id
            }
        })

        return relationAttributo;
    }

}

export { DeleteRelationAttributeProductService }
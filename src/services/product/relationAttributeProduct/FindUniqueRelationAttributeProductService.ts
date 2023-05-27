import prismaClient from '../../../prisma';

interface RelationAttributeProductRequest {
    relationAttributeProduct_id: string;
}

class FindUniqueRelationAttributeProductService {
    async execute({ relationAttributeProduct_id }: RelationAttributeProductRequest) {
        const findUniqueRelation = await prismaClient.relationAttributeProduct.findUnique({
            where: {
                id: relationAttributeProduct_id
            }
        });

        return findUniqueRelation;

    }
}

export { FindUniqueRelationAttributeProductService }
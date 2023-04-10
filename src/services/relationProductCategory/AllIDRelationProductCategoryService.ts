import prismaClient from '../../prisma';

interface RelationRequest {
    relationId: string;
}

class AllIDRelationProductCategoryService {
    async execute({ relationId }: RelationRequest) {
        const allRelation = await prismaClient.relationProductCategory.findFirst({
            where: {
                relationId: relationId
            },
            orderBy: {
                nivel: 'asc'
            }
        });

        return allRelation;

    }
}

export { AllIDRelationProductCategoryService }
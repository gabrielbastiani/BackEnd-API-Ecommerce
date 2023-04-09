import prismaClient from '../../prisma';

interface RelationRequest {
    product_id: string;
}

class AllRelationProductCategoryService {
    async execute({ product_id }: RelationRequest) {
        const allRelation = await prismaClient.relationProductCategory.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                nivel: 'asc'
            }
        });

        return allRelation;

    }
}

export { AllRelationProductCategoryService }
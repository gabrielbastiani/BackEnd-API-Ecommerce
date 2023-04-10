import prismaClient from '../../prisma';

interface RelationRequest {
    product_id: string;
}

class FindFirstRelationProductCategoryService {
    async execute({ product_id }: RelationRequest) {
        const allRelation = await prismaClient.relationProductCategory.findFirst({
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

export { FindFirstRelationProductCategoryService }
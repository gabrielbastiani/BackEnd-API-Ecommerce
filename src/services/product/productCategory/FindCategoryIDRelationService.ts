import prismaClient from '../../../prisma';

interface FindsCategoryRequest {
    category_id: string;
    product_id: string;
}

class FindCategoryIDRelationService {
    async execute({ category_id, product_id }: FindsCategoryRequest) {
        const findCategoryRelation = await prismaClient.productCategory.findMany({
            where: {
                product_id: product_id,
                category_id: category_id
            }
        });

        return findCategoryRelation;

    }
}

export { FindCategoryIDRelationService }
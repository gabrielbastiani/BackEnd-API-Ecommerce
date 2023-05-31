import prismaClient from '../../../prisma';

interface ProductCategoryRequest {
    product_id: string;
}

class FindAllRelationProductAndCategoryService {
    async execute({ product_id }: ProductCategoryRequest) {
        const findCategoryRelation = await prismaClient.productCategory.findMany({
            where: {
                product_id: product_id,
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                category: true,
                product: true
            }
        });

        return findCategoryRelation;

    }
}

export { FindAllRelationProductAndCategoryService }
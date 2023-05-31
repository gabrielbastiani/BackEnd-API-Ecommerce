import prismaClient from '../../../prisma';

interface ProductCategoryRequest {
    productCategory_id: string;
}

class FindUniqueRelationProductCategoryService {
    async execute({ productCategory_id }: ProductCategoryRequest) {
        const findCategoryRelation = await prismaClient.productCategory.findUnique({
            where: {
                id: productCategory_id
            }
        });

        return findCategoryRelation;

    }
}

export { FindUniqueRelationProductCategoryService }
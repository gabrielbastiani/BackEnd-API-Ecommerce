import prismaClient from '../../../prisma';

interface ProductCategoryRequest {
    name: string;
    product_id: string;
}

class FindCategoryAndProductService {
    async execute({ name, product_id }: ProductCategoryRequest) {
        const findCategoryRelation = await prismaClient.productCategory.findMany({
            where: {
                product_id: product_id,
                name: name
            }
        });

        return findCategoryRelation;

    }
}

export { FindCategoryAndProductService }
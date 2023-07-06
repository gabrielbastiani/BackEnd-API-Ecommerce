import { MainCategory } from '@prisma/client';
import { StatusProductCategory } from '@prisma/client';
import prismaClient from '../../../prisma';

interface ProductCategoryRequest {
    product_id: string;
}

class FindMainCategoryProductService {
    async execute({ product_id }: ProductCategoryRequest) {
        const findCategoryRelation = await prismaClient.productCategory.findFirst({
            where: {
                product_id: product_id,
                status: StatusProductCategory.Disponivel,
                mainCategory: MainCategory.Sim
            },
            include: {
                category: true,
                product: true
            }
        });

        return findCategoryRelation;

    }
}

export { FindMainCategoryProductService }
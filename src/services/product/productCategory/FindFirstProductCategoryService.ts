import { StatusCategory } from '@prisma/client';
import prismaClient from '../../../prisma';

interface ProductCategoryRequest {
    slug: string;
}

class FindFirstProductCategoryService {
    async execute({ slug }: ProductCategoryRequest) {
        const firstCategoryProduct = await prismaClient.productCategory.findFirst({
            where: {
                category: {
                    status: StatusCategory.Disponivel,
                    slug: slug,
                },
            },
            include: {
                product: { include: { photoproducts: true, productcategories: true } },
                category: true
            }
        });

        return firstCategoryProduct;

    }
}

export { FindFirstProductCategoryService }
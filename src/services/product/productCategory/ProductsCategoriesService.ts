import { StatusCategory } from '@prisma/client';
import prismaClient from '../../../prisma';

interface ProductCategoryRequest {
    slug: string;
}

class ProductsCategoriesService {
    async execute({ slug }: ProductCategoryRequest) {
        const AllproductsCategories = await prismaClient.productCategory.findMany({
            where: {
                category: {
                    status: StatusCategory.Disponivel,
                    slug: slug,
                },
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: { include: { photoproducts: true, productcategories: true } },
                category: true
            }
        });

        return AllproductsCategories;

    }
}

export { ProductsCategoriesService }
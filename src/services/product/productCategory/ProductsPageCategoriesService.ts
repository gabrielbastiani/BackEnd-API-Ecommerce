import { StatusCategory } from '@prisma/client';
import prismaClient from '../../../prisma';

interface ProductsRequest {
    slug: string;
}

class ProductsPageCategoriesService {
    async execute({ slug }: ProductsRequest) {
        const products = await prismaClient.productCategory.findMany({
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
                product: {include: {photoproducts: true, productcategories: true}},
                category: true
            }
        });

        return products;

    }
}

export { ProductsPageCategoriesService }
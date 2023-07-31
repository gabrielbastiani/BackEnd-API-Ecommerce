import { StatusCategory } from '@prisma/client';
import prismaClient from '../../../prisma';

class ProductsPageCategoriesService {
    async execute(page = 1, limit = 20, slug: string) {

        const skip = limit * (page - 1);

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
                product: { include: { photoproducts: true, productcategories: true, relationattributeproducts: { include: {valueAttribute: true} }} },
                category: true
            }
        });

        const productsCategories = await prismaClient.productCategory.findMany({
            where: {
                category: {
                    status: StatusCategory.Disponivel,
                    slug: slug,
                },
            },
            skip,
            take: limit,
            orderBy: {
                order: 'asc'
            },
            include: {
                product: { include: { photoproducts: true, productcategories: true, relationattributeproducts: { include: {valueAttribute: true} }} },
                category: true
            }
        });

        const data = {
            productsCategories,
            total: AllproductsCategories.length,
            total_pages: Math.ceil(AllproductsCategories.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ProductsPageCategoriesService }
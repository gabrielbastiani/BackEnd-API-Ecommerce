import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

class FavoritesProductsService {
    async execute(page = 1, limit = 20, product_id) {

        const skip = limit * (page - 1);

        const allProductsFavorites = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                id: { in: product_id }
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                avalietions: true,
                buyTogether: true,
                buytogethers: true,
                descriptionproducts: true,
                photoproducts: true,
                productcategories: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true
                    }
                },
                store: true,
                tags: true,
                productsvariations: true,
                stockproductcustomer: true
            }
        });

        const productsFavorites = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                id: { in: product_id }
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                avalietions: true,
                buyTogether: true,
                buytogethers: true,
                descriptionproducts: true,
                photoproducts: true,
                productcategories: true,
                relationattributeproducts: {
                    include: {
                        valueAttribute: true
                    }
                },
                store: true,
                tags: true,
                productsvariations: true,
                stockproductcustomer: true
            }
        });

        const data = {
            productsFavorites,
            total: allProductsFavorites.length,
            total_pages: Math.ceil(allProductsFavorites.length / limit),
            current_page: page,
        }

        return data;
        
    }
}

export { FavoritesProductsService }
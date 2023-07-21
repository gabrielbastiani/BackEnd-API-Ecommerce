import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface FavoriteRequest {
    product_id: string;
}

class FavoritesProductsService {
    async execute({ product_id }: FavoriteRequest) {
        const productsFavorites = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                id: { in: product_id }
            },
            include: {
                avalietions: true,
                buyTogether: true,
                buytogethers: true,
                descriptionproducts: true,
                photoproducts: true,
                productcategories: true,
                relationattributeproducts: true,
                store: true,
                tags: true,
                variations: true
            }
        });

        return productsFavorites;
        
    }
}

export { FavoritesProductsService }
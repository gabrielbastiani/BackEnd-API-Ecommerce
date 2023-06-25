import { StatusProduct } from '@prisma/client';
import prismaClient from '../../prisma';

interface SearchProductRequest {
    search: string;
}

class AllProductSearchService {
    async execute({ search }: SearchProductRequest) {
        const allProduct = await prismaClient.product.findMany({
            where: {
                status: StatusProduct.Disponivel,
                name: {
                    contains : search,
                    mode: 'insensitive'
                }
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
        return allProduct;
    }
}

export { AllProductSearchService }
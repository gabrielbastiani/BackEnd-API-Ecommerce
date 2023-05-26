import prismaClient from '../../prisma';

interface ProductRequest {
    product_id: string;
}

class ListExactProductService {
    async execute({ product_id }: ProductRequest) {
        const exactProduct = await prismaClient.product.findUnique({
            where: {
                id: product_id
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
        })
        return exactProduct;
    }
}

export { ListExactProductService }
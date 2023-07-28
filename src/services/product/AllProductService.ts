import prismaClient from '../../prisma';

interface ProductRequest {
    product_id: string;
}

class AllProductService {
    async execute({ product_id }: ProductRequest) {
        const allProduct = await prismaClient.product.findMany({
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
                productsvariations: true,
                stockproductcustomer: true
            }
        });

        return allProduct;

    }
}

export { AllProductService }
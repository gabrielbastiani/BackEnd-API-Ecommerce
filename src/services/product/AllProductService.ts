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
                relationproductcategories: true,
            }
        });

        return allProduct;

    }
}

export { AllProductService }
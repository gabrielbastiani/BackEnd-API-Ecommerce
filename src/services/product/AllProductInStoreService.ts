import prismaClient from '../../prisma';

class AllProductInStoreService {
    async execute() {
        const allProduct = await prismaClient.product.findMany();
        return allProduct;
    }
}

export { AllProductInStoreService }
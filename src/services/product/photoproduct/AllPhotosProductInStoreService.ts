import prismaClient from '../../../prisma';

class AllPhotosProductInStoreService {
    async execute() {
        const allProducts = await prismaClient.photoProduct.findMany({
            include: {
                product: true,
            }
        });

        return allProducts;

    }
}

export { AllPhotosProductInStoreService }
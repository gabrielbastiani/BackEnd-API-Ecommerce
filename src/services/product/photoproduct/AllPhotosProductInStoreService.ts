import prismaClient from '../../../prisma';

class AllPhotosProductInStoreService {
    async execute() {
        const allProducts = await prismaClient.photoProduct.findMany({
            select: {
                id: true,
                photo: true
            }
        });

        return allProducts;

    }
}

export { AllPhotosProductInStoreService }
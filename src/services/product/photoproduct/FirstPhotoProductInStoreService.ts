import prismaClient from '../../../prisma';

class FirstPhotoProductInStoreService {
    async execute() {
        const allProducts = await prismaClient.photoProduct.findFirst({
            include: {
                product: true,
            }
        });

        return allProducts;

    }
}

export { FirstPhotoProductInStoreService }
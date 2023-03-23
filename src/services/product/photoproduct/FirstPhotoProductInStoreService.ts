import prismaClient from '../../../prisma';

class FirstPhotoProductInStoreService {
    async execute() {
        const allProducts = await prismaClient.photoProduct.findMany();

        return allProducts;

    }
}

export { FirstPhotoProductInStoreService }
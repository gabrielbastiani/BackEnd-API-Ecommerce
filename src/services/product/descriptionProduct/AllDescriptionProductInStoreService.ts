import prismaClient from '../../../prisma';

class AllDescriptionProductInStoreService {
    async execute() {
        const allProducts = await prismaClient.descriptionProduct.findMany({
            include: {
                product: true
            }
        });

        return allProducts;

    }
}

export { AllDescriptionProductInStoreService }
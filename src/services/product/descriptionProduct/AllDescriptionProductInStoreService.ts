import prismaClient from '../../../prisma';

class AllDescriptionProductInStoreService {
    async execute() {
        const allProducts = await prismaClient.descriptionProduct.findMany({
            include: {
                product: true
            },
            orderBy: {
                order: 'asc'
            }
        });

        return allProducts;

    }
}

export { AllDescriptionProductInStoreService }
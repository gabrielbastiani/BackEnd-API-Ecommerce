import prismaClient from '../../prisma';

class AllProductFilterService {
    async execute() {
        const allProduct = await prismaClient.product.findMany();

        return allProduct;

    }
}

export { AllProductFilterService }
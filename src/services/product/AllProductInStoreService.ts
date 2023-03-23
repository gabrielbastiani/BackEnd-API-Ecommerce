import prismaClient from '../../prisma';

class AllProductInStoreService {
    async execute() {
        const allProduct = await prismaClient.product.findMany({
            include: {
                category: true,
                loja: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            }
        });
        return allProduct;
    }
}

export { AllProductInStoreService }
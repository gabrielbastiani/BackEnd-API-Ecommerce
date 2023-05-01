import prismaClient from '../../prisma';

class AllProductExistService {
    async execute() {
        const allProduct = await prismaClient.product.findMany({
            include: {
                relationproductcategories: true,
                relationProductAtributos: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            }
        });

        return allProduct;

    }
}

export { AllProductExistService }
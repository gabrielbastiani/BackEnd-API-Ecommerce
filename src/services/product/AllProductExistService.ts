import prismaClient from '../../prisma';

class AllProductExistService {
    async execute() {
        const allProduct = await prismaClient.product.findMany({
            include: {
                relationproductcategories: true,
                relationproductatributos: true,
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
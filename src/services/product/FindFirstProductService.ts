import prismaClient from '../../prisma';

class FindFirstProductService {
    async execute() {
        const findFirstProduct = await prismaClient.product.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                relationproductcategories: true,
                relationproductatributos: true,
                store: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            }
        })
        return findFirstProduct;
    }
}

export { FindFirstProductService }
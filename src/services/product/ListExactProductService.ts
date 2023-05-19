import prismaClient from '../../prisma';

class ListExactProductService {
    async execute({ product_id }) {
        const exactProduct = await prismaClient.product.findUnique({
            where: {
                id: String(product_id)
            },
            include: {
                relationproductcategories: true,
                relationproductatributos: true,
                loja: true,
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            }
        })
        return exactProduct;
    }
}

export { ListExactProductService }
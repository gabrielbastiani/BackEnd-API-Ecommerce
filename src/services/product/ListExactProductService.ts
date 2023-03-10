import prismaClient from '../../prisma';

class ListExactProductService {
    async execute({ product_id }) {
        const exactProduct = await prismaClient.product.findUnique({
            where: {
                id: String(product_id)
            },
            include: {
                category: true,
                loja: true,
                photoproducts: true,
                variacoes: true,
                avaliacoes: true,
            },
        })
        return exactProduct;
    }
}

export { ListExactProductService }
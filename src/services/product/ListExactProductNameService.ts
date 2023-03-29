import prismaClient from '../../prisma';

class ListExactProductNameService {
    async execute({ slug }) {
        const exactProduct = await prismaClient.product.findUnique({
            where: {
                slug
            },
            include: {
                photoproducts: true,
                variacoes: true,
                photovariacoes: true,
                avaliacoes: true,
            }
        })
        return exactProduct;
    }
}

export { ListExactProductNameService }
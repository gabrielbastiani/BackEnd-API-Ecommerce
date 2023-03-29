import prismaClient from '../../prisma';

class ListExactProductNameService {
    async execute({ slug }) {
        const exactProduct = await prismaClient.product.findUnique({
            where: {
                slug
            }
        })
        return exactProduct;
    }
}

export { ListExactProductNameService }
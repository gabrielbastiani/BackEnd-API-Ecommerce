import prismaClient from '../../prisma';

interface RequestProduct {
    slug: string;
}

class ListExactProductNameService {
    async execute({ slug }: RequestProduct) {
        const exactProduct = await prismaClient.product.findUnique({
            where: {
                slug: slug
            }
        })
        return exactProduct;
    }
}

export { ListExactProductNameService }
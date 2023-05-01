import prismaClient from '../../prisma';

interface RequestProduct {
    slug: string;
}

class ListExactProductNameService {
    async execute({ slug }: RequestProduct) {
        const exactProduct = await prismaClient.product.findFirst({
            where: {
                slug: slug
            },
            include: {
                relationproductcategories: true,
                relationProductAtributos: true,
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

export { ListExactProductNameService }
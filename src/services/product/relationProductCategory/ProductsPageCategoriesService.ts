import prismaClient from '../../../prisma';

interface ProductsRequest {
    slug: string;
}

class ProductsPageCategoriesService {
    async execute({ slug }: ProductsRequest) {
        const products = await prismaClient.relationProductCategory.findMany({
            where: {
                category: {
                    slug: slug,
                },
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: {include: {photoproducts: true, relationProductAtributos: true}},
                category: true
            }
        });

        return products;

    }
}

export { ProductsPageCategoriesService }
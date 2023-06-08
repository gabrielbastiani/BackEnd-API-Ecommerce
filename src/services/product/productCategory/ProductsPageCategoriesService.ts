import prismaClient from '../../../prisma';

interface ProductsRequest {
    slug: string;
}

class ProductsPageCategoriesService {
    async execute({ slug }: ProductsRequest) {
        const products = await prismaClient.productCategory.findMany({
            where: {
                category: {
                    slug: slug,
                },
            },
            orderBy: {
                order: 'asc'
            },
            include: {
                product: {include: {photoproducts: true, productcategories: true}},
                category: true
            }
        });

        return products;

    }
}

export { ProductsPageCategoriesService }
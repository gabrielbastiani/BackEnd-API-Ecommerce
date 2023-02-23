import prismaClient from '../../prisma';

interface CategoryRequest {
    category_id: string;
}

class ExactCategoryProductService {
    async execute({ category_id }: CategoryRequest) {
        const allProducts = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            include: {
                photoproducts: true,
                variacoes: true,
                avaliacoes: true,
                item: true,
                loja: true,
                category: true
            }
        });

        return allProducts;

    }
}

export { ExactCategoryProductService }
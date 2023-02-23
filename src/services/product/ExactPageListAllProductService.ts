import prismaClient from '../../prisma';

class ExactPageListAllProductService {
    async execute(page = 1, limit = 5, category_id: string) {

        const skip = limit * (page - 1);

        const allProducts = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            orderBy: {
                created_at: 'desc'
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

        const products = await prismaClient.product.findMany({
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
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            products,
            total: allProducts.length,
            total_pages: Math.ceil(allProducts.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { ExactPageListAllProductService }
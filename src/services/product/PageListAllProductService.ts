import prismaClient from '../../prisma';

class PageListAllProductService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allProducts = await prismaClient.product.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                category: true,
            }
        });
        
        const products = await prismaClient.product.findMany({
            include: {
                category: true,
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

export { PageListAllProductService }
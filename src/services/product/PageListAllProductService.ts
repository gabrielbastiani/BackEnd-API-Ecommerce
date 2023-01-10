import prismaClient from '../../prisma';

class PageListAllProductService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allProducts = await prismaClient.product.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const products = await prismaClient.product.findMany({
            select: {
                id: true,
                nameProduct: true,
                descriptionProduct1: true,
                descriptionProduct2: true,
                descriptionProduct3: true,
                descriptionProduct4: true,
                descriptionProduct5: true,
                descriptionProduct6: true,
                price: true,
                sku: true,
                estoque: true,
                avaliacao: true,
                pesoKG: true,
                larguraCM: true,
                alturaCM: true,
                profundidadeCM: true,
                category_id: true,
                created_at: true,
                variacoes: true,
                photoproducts: true
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
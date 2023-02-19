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
            }
        });

        const products = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            },
            select: {
                id: true,
                nameProduct: true,
                descriptionProduct1: true,
                descriptionProduct2: true,
                descriptionProduct3: true,
                descriptionProduct4: true,
                descriptionProduct5: true,
                descriptionProduct6: true,
                preco: true,
                sku: true,
                estoque: true,
                pesoKG: true,
                larguraCM: true,
                alturaCM: true,
                profundidadeCM: true,
                disponibilidade: true,
                promocao: true,
                category_id: true,
                categoryName: true,
                loja_id: true,
                created_at: true,
                variacoes: true,
                photoproducts: true,
                avaliacoes: true
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
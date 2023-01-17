import prismaClient from '../../../prisma';

class PageAllCarrinhoService {
    async execute(page = 1, limit = 5, carrinho_id) {

        const skip = limit * (page - 1);

        const allCarrinho = await prismaClient.carrinho.findMany({
            where: {
                id: carrinho_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const carrinhos = await prismaClient.carrinho.findMany({
            select: {
                id: true,
                itens: true,
                custoEntrega: true,
                prazoEntrega: true,
                tipoEntrega: true,
                valorPagamento: true,
                created_at: true,
                loja_id: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            carrinhos,
            total: allCarrinho.length,
            total_pages: Math.ceil(allCarrinho.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageAllCarrinhoService }
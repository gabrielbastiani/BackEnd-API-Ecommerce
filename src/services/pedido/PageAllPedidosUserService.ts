import prismaClient from '../../prisma';

class PageAllPedidosUserService {
    async execute(page = 1, limit = 5, user_id) {

        const skip = limit * (page - 1);

        const allPedidos = await prismaClient.pedido.findMany({
            where: {
                user_id: user_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        const pedidos = await prismaClient.pedido.findMany({
            select: {
                id: true,
                user_id: true,
                carrinhos: true,
                entregas: true,
                pagamento_id: true,
                formaPagamento: true,
                enderecoEntregaIgualCobranca: true,
                cancelado: true,
                loja_id: true,
                created_at: true,
            },
            skip,
            take: limit,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            pedidos,
            total: allPedidos.length,
            total_pages: Math.ceil(allPedidos.length / limit),
            current_page: page,
        }

        return data;

    }
}

export { PageAllPedidosUserService }
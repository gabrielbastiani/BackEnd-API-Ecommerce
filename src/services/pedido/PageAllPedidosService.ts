import prismaClient from '../../prisma';

class PageAllPedidosService {
    async execute(page = 1, limit = 5) {

        const skip = limit * (page - 1);

        const allPedidos = await prismaClient.pedido.findMany({
            orderBy: {
                created_at: 'desc'
            },
            include: {
                user: true,
                carrinhos: true,
                entregas: true,
                pagamentos: true,
            },
        });

        const pedidos = await prismaClient.pedido.findMany({
            include: {
                user: true,
                carrinhos: true,
                entregas: true,
                pagamentos: true,
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

export { PageAllPedidosService }
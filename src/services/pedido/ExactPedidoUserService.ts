import prismaClient from '../../prisma';

class ExactPedidoUserService {
    async execute({ pedido_id }) {
        const exactPedido = await prismaClient.pedido.findUnique({
            where: {
                id: String(pedido_id)
            },
            include: {
                user: true,
                carrinhos: true,
                entregas: true,
                pagamentos: true,
                pagamento: true,
                loja: true,
            },
        })
        return exactPedido;
    }
}

export { ExactPedidoUserService }
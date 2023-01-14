import prismaClient from "../../prisma";

interface PedidoRequest {
    loja_id: string;
    user_id: string;
}

class CreatePedidoService {
    async execute({
        loja_id,
        user_id,
    }: PedidoRequest) {
        const pedido = await prismaClient.pedido.create({
            data: {
                loja_id: loja_id,
                user_id: user_id,
            },
            select: {
                id: true,
                user_id: true,
                carrinhos: true,
                entrega_id: true,
                pagamento_id: true,
                formaPagamento: true,
                enderecoEntregaIgualCobranca: true,
                cancelado: true,
                created_at: true,
                loja_id: true,
            }
        })

        return (pedido);

    }
}

export { CreatePedidoService }
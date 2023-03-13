import prismaClient from "../../prisma";

interface PedidoRequest {
    custoEntrega: number;
    prazoEntrega: string;
    tipoEntrega: string;
    valorPagamento: number;
    loja_id: string;
    user_id: string;
    tipo: string;
    custo: number;
    prazo: string;
    local: string;
    numero: string;
    complemento: string;
    bairro: string;
    CEP: string;
    cidade: string;
    estado: string;
    status: string;
    pagamento_id: string;
}

class CreatePedidoService {
    async execute({
        loja_id,
        user_id,
        custoEntrega,
        prazoEntrega,
        tipoEntrega,
        valorPagamento,
        tipo,
        custo,
        prazo,
        local,
        numero,
        complemento,
        bairro,
        CEP,
        cidade,
        estado,
        status,
        pagamento_id
    }: PedidoRequest) {
        const pedido = await prismaClient.pedido.create({
            data: {
                loja_id: loja_id,
                user_id: user_id,
                pagamento_id: pagamento_id
            },
            include: {
                carrinhos: true,
                entregas: true,
                pagamentos: true,
                pagamento: true,
            }
        })

        const pedidoID = await prismaClient.pedido.findUnique({
            where: {
                id: pedido.id
            }
        })

        const entrega = await prismaClient.entrega.create({
            data: {
                pedido_id: pedidoID.id,
                tipo: tipo,
                custo: custo,
                prazo: prazo,
                local: local,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                CEP: CEP,
                cidade: cidade,
                estado: estado,
                loja_id: pedidoID.loja_id
            },
            include: {
                pedido: true
            }
        })

        const carrinho = await prismaClient.carrinho.create({
            data: {
                pedido_id: pedidoID.id,/* @ts-ignore */
                custoEntrega: custoEntrega,
                prazoEntrega: prazoEntrega,
                tipoEntrega: tipoEntrega,
                valorPagamento: valorPagamento,
                loja_id: pedidoID.loja_id
            },
            include: {
                pedido: true,
                itens: true,
            }
        })

        const pagamento = await prismaClient.pagamento.create({
            data: {
                status: status,
                user_id: pedidoID.user_id,
                pedido_id: pedidoID.id,
                loja_id: pedidoID.loja_id
            },
            include: {
                user: true,
                pedido: true,
            }
        })

        return ([pedido, carrinho, entrega, pagamento]);

    }
}

export { CreatePedidoService }
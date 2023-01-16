import prismaClient from "../../prisma";

interface PedidoRequest {
    product_id: string;
    variacao_id: string;
    quantidade: string;
    precoUnitario: string;
    custoEntrega: string;
    prazoEntrega: string;
    tipoEntrega: string;
    valorPagamento: string;
    loja_id: string;
    user_id: string;
    tipo: string;
    custo: string;
    prazo: string;
    local: string;
    numero: string;
    complemento: string;
    bairro: string;
    CEP: string;
    cidade: string;
    estado: string;
}

class CreatePedidoService {
    async execute({
        loja_id,
        user_id,
        product_id,
        variacao_id,
        quantidade,
        precoUnitario,
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
                entregas: true,
                pagamento_id: true,
                formaPagamento: true,
                enderecoEntregaIgualCobranca: true,
                cancelado: true,
                created_at: true,
                loja_id: true,
            }
        })

        const carrinho = await prismaClient.carrinho.create({
            data: {
                product_id: product_id,
                variacao_id: variacao_id,
                quantidade: quantidade,
                precoUnitario: precoUnitario,
                custoEntrega: custoEntrega,
                prazoEntrega: prazoEntrega,
                tipoEntrega: tipoEntrega,
                valorPagamento: valorPagamento,
                loja_id: loja_id
            },
            select: {
                id: true,
                product_id: true,
                variacao_id: true,
                quantidade: true,
                precoUnitario: true,
                custoEntrega: true,
                prazoEntrega: true,
                tipoEntrega: true,
                valorPagamento: true,
                created_at: true,
                loja_id: true,
            }
        })

        const entrega = await prismaClient.entrega.create({
            data: {
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
                loja_id: loja_id
            },
            select: {
                id: true,
                custo: true,
                codigoRastreamento: true,
                status: true,
                prazo: true,
                local: true,
                numero: true,
                complemento: true,
                bairro: true,
                CEP: true,
                cidade: true,
                estado: true,
                pedido_id: true,
                created_at: true,
                loja_id: true,
            }
        })

        return ([pedido, carrinho, entrega]);

    }
}

export { CreatePedidoService }
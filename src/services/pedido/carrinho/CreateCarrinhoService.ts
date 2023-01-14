import prismaClient from "../../../prisma";

interface CarrinhoRequest {
    product_id: string;
    variacao_id: string;
    quantidade: string;
    precoUnitario: string;
    custoEntrega: string;
    prazoEntrega: string;
    tipoEntrega: string;
    valorPagamento: string;
    loja_id: string;
}

class CreateCarrinhoService {
    async execute({
        product_id,
        variacao_id,
        quantidade,
        precoUnitario,
        custoEntrega,
        prazoEntrega,
        tipoEntrega,
        valorPagamento,
        loja_id
    }: CarrinhoRequest) {

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

        return carrinho;

    }
}

export { CreateCarrinhoService }
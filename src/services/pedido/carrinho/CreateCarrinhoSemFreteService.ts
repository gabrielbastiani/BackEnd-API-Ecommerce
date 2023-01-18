import prismaClient from "../../../prisma";

interface CarrinhoRequest {
    product_id: string;
    variacao_id: string;
    quantidade: number;
    precoUnitario: number;
    custoEntrega: string;
    prazoEntrega: string;
    tipoEntrega: string;
    valorPagamento: string;
    loja_id: string;
}

class CreateCarrinhoSemFreteService {
    async execute({
        product_id,
        variacao_id,
        quantidade,
        precoUnitario,
        loja_id
    }: CarrinhoRequest) {
        const carrinho = await prismaClient.carrinho.create({
            data: {
                loja_id: loja_id
            },
            select: {
                id: true,
                itens: true,
                custoEntrega: true,
                prazoEntrega: true,
                tipoEntrega: true,
                valorPagamento: true,
                created_at: true,
                loja_id: true,
            }
        });

        const carrinhoID = await prismaClient.carrinho.findFirst({
            where: {
                id: carrinho.id
            }
        });

        const item = await prismaClient.item.create({
            data: {
                product_id: product_id,
                variacao_id: variacao_id,
                quantidade: quantidade,
                precoUnitario: precoUnitario,
                carrinho_id: carrinhoID.id
            },
            select: {
                id: true,
                carrinho_id: true,
                product_id: true,
                variacao_id: true,
                quantidade: true,
                precoUnitario: true
            }
        });

        return ([item, carrinho]);

    }
}


export { CreateCarrinhoSemFreteService }
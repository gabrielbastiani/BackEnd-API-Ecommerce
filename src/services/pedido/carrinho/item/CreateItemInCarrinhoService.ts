import prismaClient from "../../../../prisma";

interface ItemRequest {
    carrinho_id: string;
    product_id: string;
    variacao_id: string;
    quantidade: number;
    precoUnitario: string;
}

class CreateItemInCarrinhoService {
    async execute({
        carrinho_id,
        product_id,
        variacao_id,
        quantidade,
        precoUnitario,
    }: ItemRequest) {
        
        const carrinho = await prismaClient.carrinho.findUnique({
            where: {
                id: carrinho_id
            }
        })

        const item = await prismaClient.item.create({
            data: {
                carrinho_id: carrinho.id,
                product_id: product_id,
                variacao_id: variacao_id,
                quantidade: quantidade,
                precoUnitario: precoUnitario,
            },
            select: {
                id: true,
                carrinho_id: true,
                product_id: true,
                variacao_id: true,
                quantidade: true,
                precoUnitario: true
            }
        })

        return ([item, carrinho]);

    }
}

export { CreateItemInCarrinhoService }
import prismaClient from "../../../../prisma";

interface ItemRequest {
    product_id: string;
    variacao_id: string;
    quantidade: number;
    precoUnitario: string;
}

class CreateItemService {
    async execute({
        product_id,
        variacao_id,
        quantidade,
        precoUnitario,
    }: ItemRequest) {
        const item = await prismaClient.item.create({
            data: {
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

        return (item);

    }
}

export { CreateItemService }
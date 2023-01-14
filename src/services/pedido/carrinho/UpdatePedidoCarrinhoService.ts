import prismaClient from "../../../prisma";

interface CarrinhoRequest {
   carrinho_id: any;
   pedido_id: string;
}

class UpdatePedidoCarrinhoService {
  async execute({ carrinho_id, pedido_id }: CarrinhoRequest){
    const updateCarrinho = await prismaClient.carrinho.update({
      where:{
        id: String(carrinho_id)
      },
      data:{
        pedido_id: pedido_id,
      }
    })

    return updateCarrinho;

  }

}

export { UpdatePedidoCarrinhoService }
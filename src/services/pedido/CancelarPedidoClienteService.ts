import prismaClient from "../../prisma";

interface PedidoRequest {
  pedido_id: string;
}

class CancelarPedidoClienteService {
  async execute({ pedido_id }: PedidoRequest) {
    const cancelarPedido = await prismaClient.pedido.update({
      where: {
        id: pedido_id
      },
      data: {
        cancelado: true
      }
    })

    return cancelarPedido;

  }

}

export { CancelarPedidoClienteService }
import prismaClient from "../../prisma";

interface PedidoRequest {
  pedido_id: string;
}

class CancelarPedidoAdminService {
  async execute({ pedido_id }: PedidoRequest) {
    const activeTrue = await prismaClient.pedido.findUnique({
      where: {
        id: pedido_id
      },
      select: {
        cancelado: true
      }
    })

    const activeFalse = await prismaClient.pedido.findUnique({
      where: {
        id: pedido_id
      },
      select: {
        cancelado: true
      }
    })

    if(activeTrue.cancelado === true){
      const isFalse = await prismaClient.pedido.update({
        where:{
          id: pedido_id
        },
        data: {
          cancelado: false
        }
      })

      return isFalse;
    }

    if(activeFalse.cancelado === false){
      const isTrue = await prismaClient.pedido.update({
        where:{
          id: pedido_id
        },
        data: {
          cancelado: true
        }
      })

      return isTrue;

    }

  }
}

export { CancelarPedidoAdminService }
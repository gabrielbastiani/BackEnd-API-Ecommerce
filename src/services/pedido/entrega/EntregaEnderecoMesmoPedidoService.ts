import prismaClient from "../../../prisma";

interface PedidoRequest {
  pedido_id: string;
}

class EntregaEnderecoMesmoPedidoService {
  async execute({ pedido_id }: PedidoRequest) {
    const activeTrue = await prismaClient.pedido.findUnique({
      where: {
        id: pedido_id
      },
      select: {
        enderecoEntregaIgualCobranca: true
      }
    })

    const activeFalse = await prismaClient.pedido.findUnique({
      where: {
        id: pedido_id
      },
      select: {
        enderecoEntregaIgualCobranca: true
      }
    })

    if(activeTrue.enderecoEntregaIgualCobranca === true){
      const isFalse = await prismaClient.pedido.update({
        where:{
          id: pedido_id
        },
        data: {
          enderecoEntregaIgualCobranca: false
        }
      })

      return isFalse;
    }

    if(activeFalse.enderecoEntregaIgualCobranca === false){
      const isTrue = await prismaClient.pedido.update({
        where:{
          id: pedido_id
        },
        data: {
          enderecoEntregaIgualCobranca: true
        }
      })

      return isTrue;

    }

  }
}

export { EntregaEnderecoMesmoPedidoService }
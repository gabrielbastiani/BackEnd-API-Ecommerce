import { StatusPedido } from "@prisma/client";
import prismaClient from "../../prisma";

interface PedidoRequest {
  pedido_id: string;
}

class CancelarPedidoAdminService {
  async execute({ pedido_id }: PedidoRequest) {
    const active = await prismaClient.pedido.findUnique({
      where: {
        id: pedido_id
      },
      select: {
        cancelado: true
      }
    })

    if(active.cancelado === "Valido"){
      const isFalse = await prismaClient.pedido.update({
        where:{
          id: pedido_id
        },
        data: {
          cancelado: StatusPedido.Cancelado
        }
      })

      return isFalse;
    }

    if(active.cancelado === "Cancelado"){
      const isTrue = await prismaClient.pedido.update({
        where:{
          id: pedido_id
        },
        data: {
          cancelado: StatusPedido.Valido
        }
      })

      return isTrue;

    }

  }
}

export { CancelarPedidoAdminService }
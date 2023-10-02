import { StatusCart } from "@prisma/client";
import prismaClient from "../../../prisma";

interface AbandonedRequest {
  configAbandonedCart_id: string;
}

class UpdateStatusConfigAbandonedCartService {
  async execute({ configAbandonedCart_id }: AbandonedRequest) {
    const active = await prismaClient.configAbandonedCart.findUnique({
      where: {
        id: configAbandonedCart_id
      },
      select: {
        active: true
      }
    })

    if (active.active === "Sim") {
      const isFalse = await prismaClient.configAbandonedCart.update({
        where: {
          id: configAbandonedCart_id
        },
        data: {
          active: StatusCart.Nao
        }
      })

      return isFalse;
    }

    if (active.active === "Nao") {
      const isTrue = await prismaClient.configAbandonedCart.update({
        where: {
          id: configAbandonedCart_id
        },
        data: {
          active: StatusCart.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusConfigAbandonedCartService }
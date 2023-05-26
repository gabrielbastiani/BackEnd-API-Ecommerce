import { StatusFreeShipping } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class UpdateProductFreeShippingService {
  async execute({ product_id }: ProductRequest) {
    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        freeShipping: true
      }
    })

    if (active.freeShipping === "Sim") {
      const isFalse = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          freeShipping: StatusFreeShipping.Nao
        }
      })

      return isFalse;
    }

    if (active.freeShipping === "Nao") {
      const isTrue = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          freeShipping: StatusFreeShipping.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateProductFreeShippingService }
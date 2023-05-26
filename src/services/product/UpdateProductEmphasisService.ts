import { StatusEmphasis } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class UpdateProductEmphasisService {
  async execute({ product_id }: ProductRequest) {
    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        emphasis: true
      }
    })

    if (active.emphasis === "Sim") {
      const isFalse = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          emphasis: StatusEmphasis.Nao
        }
      })

      return isFalse;
    }

    if (active.emphasis === "Nao") {
      const isTrue = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          emphasis: StatusEmphasis.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateProductEmphasisService }
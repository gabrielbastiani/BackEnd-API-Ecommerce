import { StatusOffer } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class UpdateProductOfferService {
  async execute({ product_id }: ProductRequest) {
    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        offer: true
      }
    })

    if (active.offer === "Sim") {
      const isFalse = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          offer: StatusOffer.Nao
        }
      })

      return isFalse;
    }

    if (active.offer === "Nao") {
      const isTrue = await prismaClient.product.update({
        where: {
          id: product_id
        },
        data: {
          offer: StatusOffer.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateProductOfferService }
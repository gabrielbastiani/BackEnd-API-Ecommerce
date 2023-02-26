import { StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class DisponibilidadeDoProductService {
  async execute({ product_id }: ProductRequest) {
    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(active.disponibilidade === "Disponivel"){
      const isFalse = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          disponibilidade: StatusProduct.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.disponibilidade === "Indisponivel"){
      const isTrue = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          disponibilidade: StatusProduct.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { DisponibilidadeDoProductService }
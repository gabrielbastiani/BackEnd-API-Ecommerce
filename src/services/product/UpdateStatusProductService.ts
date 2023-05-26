import { StatusProduct } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class UpdateStatusProductService {
  async execute({ product_id }: ProductRequest) {
    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        status: true
      }
    })

    if(active.status === "Disponivel"){
      const isFalse = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          status: StatusProduct.Indisponivel
        }
      })

      return isFalse;
    }

    if(active.status === "Indisponivel"){
      const isTrue = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          status: StatusProduct.Disponivel
        }
      })

      return isTrue;

    }

  }
}

export { UpdateStatusProductService }
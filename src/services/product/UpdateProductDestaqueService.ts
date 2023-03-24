import { StatusDestaque } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class UpdateProductDestaqueService {
  async execute({ product_id }: ProductRequest) {
    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        produtoDestaque: true
      }
    })

    if(active.produtoDestaque === "Sim"){
      const isFalse = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          produtoDestaque: StatusDestaque.Nao
        }
      })

      return isFalse;
    }

    if(active.produtoDestaque === "Nao"){
      const isTrue = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          produtoDestaque: StatusDestaque.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateProductDestaqueService }
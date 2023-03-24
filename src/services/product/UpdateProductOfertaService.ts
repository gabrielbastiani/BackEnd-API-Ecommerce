import { StatusOferta } from "@prisma/client";
import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class UpdateProductOfertaService {
  async execute({ product_id }: ProductRequest) {
    const active = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        produtoOferta: true
      }
    })

    if(active.produtoOferta === "Sim"){
      const isFalse = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          produtoOferta: StatusOferta.Nao
        }
      })

      return isFalse;
    }

    if(active.produtoOferta === "Nao"){
      const isTrue = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          produtoOferta: StatusOferta.Sim
        }
      })

      return isTrue;

    }

  }
}

export { UpdateProductOfertaService }
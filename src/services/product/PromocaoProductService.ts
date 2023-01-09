import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class PromocaoProductService {
  async execute({ product_id }: ProductRequest) {

    const activeTrue = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        promocao: true
      }
    })

    const activeFalse = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        promocao: true
      }
    })

    if(activeTrue.promocao === true){
      const isFalse = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          promocao: false
        }
      })

      return isFalse;
    }

    if(activeFalse.promocao === false){
      const isTrue = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          promocao: true
        }
      })

      return isTrue;

    }

  }
}

export { PromocaoProductService }
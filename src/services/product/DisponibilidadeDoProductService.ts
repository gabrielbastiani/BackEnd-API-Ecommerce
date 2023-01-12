import prismaClient from "../../prisma";

interface ProductRequest {
  product_id: string;
}

class DisponibilidadeDoProductService {
  async execute({ product_id }: ProductRequest) {
    const activeTrue = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        disponibilidade: true
      }
    })

    const activeFalse = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        disponibilidade: true
      }
    })

    if(activeTrue.disponibilidade === true){
      const isFalse = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          disponibilidade: false
        }
      })

      return isFalse;
    }

    if(activeFalse.disponibilidade === false){
      const isTrue = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          disponibilidade: true
        }
      })

      return isTrue;

    }

  }
}

export { DisponibilidadeDoProductService }
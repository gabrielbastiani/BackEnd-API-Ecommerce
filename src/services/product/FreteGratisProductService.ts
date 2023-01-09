import prismaClient from "../../prisma";

interface UserRequest{
  product_id: string;
}

class FreteGratisProductService {
  async execute({ product_id }: UserRequest){

    const activeTrue = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        freteGratis: true
      }
    })

    const activeFalse = await prismaClient.product.findUnique({
      where: {
        id: product_id
      },
      select: {
        freteGratis: true
      }
    })

    if(activeTrue.freteGratis === true){
      const isFalse = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          freteGratis: false
        }
      })

      return isFalse;
    }

    if(activeFalse.freteGratis === false){
      const isTrue = await prismaClient.product.update({
        where:{
          id: product_id
        },
        data: {
          freteGratis: true
        }
      })

      return isTrue;

    }

  }
}

export { FreteGratisProductService }
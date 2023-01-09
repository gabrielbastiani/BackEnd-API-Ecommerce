import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   alturaCM: number;
}

class UpdateAlturaProductService {
  async execute({ product_id, alturaCM }: ProductRequest){
    const updatealturaCM = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        alturaCM: alturaCM,
      }
    })

    return updatealturaCM;

  }
}

export { UpdateAlturaProductService }
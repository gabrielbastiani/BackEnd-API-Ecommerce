import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   larguraCM: string;
}

class UpdateLarguraProductService {
  async execute({ product_id, larguraCM }: ProductRequest){
    const updatelarguraCM = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        larguraCM: larguraCM,
      }
    })

    return updatelarguraCM;

  }
}

export { UpdateLarguraProductService }
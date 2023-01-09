import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   pesoKG: number;
}

class UpdatePesoProductService {
  async execute({ product_id, pesoKG }: ProductRequest){
    const updatepesoKG = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        pesoKG: pesoKG,
      }
    })

    return updatepesoKG;

  }
}

export { UpdatePesoProductService }
import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   preco: number;
}

class UpdatePriceProductService {
  async execute({ product_id, preco }: ProductRequest){
    const updatePrice = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        preco: preco,
      }
    })

    return updatePrice;

  }
}

export { UpdatePriceProductService }
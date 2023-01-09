import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   price: number;
}

class UpdatePriceProductService {
  async execute({ product_id, price }: ProductRequest){
    const updatePrice = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        price: price,
      }
    })

    return updatePrice;

  }
}

export { UpdatePriceProductService }
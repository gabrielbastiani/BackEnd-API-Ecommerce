import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   sku: string;
}

class UpdateSKUProductService {
  async execute({ product_id, sku }: ProductRequest){
    const updateSKU = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        sku: sku,
      }
    })

    return updateSKU;

  }
}

export { UpdateSKUProductService }
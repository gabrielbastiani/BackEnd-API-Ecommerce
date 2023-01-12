import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   promocao: string;
}

class PromocaoProductService {
  async execute({ product_id, promocao }: ProductRequest){
    const promocaoProduct = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        promocao: promocao,
      }
    })

    return promocaoProduct;

  }
}

export { PromocaoProductService }
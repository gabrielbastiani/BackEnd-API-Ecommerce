import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   estoque: string;
}

class UpdateEstoqueProductService {
  async execute({ product_id, estoque }: ProductRequest){
    const updateestoque = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        estoque: estoque,
      }
    })

    return updateestoque;

  }
}

export { UpdateEstoqueProductService }
import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   quantidade: number;
}

class UpdateQuantidadeProductService {
  async execute({ product_id, quantidade }: ProductRequest){
    const updatequantidade = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        quantidade: quantidade,
      }
    })

    return updatequantidade;

  }
}

export { UpdateQuantidadeProductService }
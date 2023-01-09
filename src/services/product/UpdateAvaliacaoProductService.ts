import prismaClient from "../../prisma";

interface ProductRequest {
   product_id: any;
   avaliacao: string;
}

class UpdateAvaliacaoProductService {
  async execute({ product_id, avaliacao }: ProductRequest){
    const updateavaliacao = await prismaClient.product.update({
      where:{
        id: String(product_id)
      },
      data:{
        avaliacao: avaliacao,
      }
    })

    return updateavaliacao;

  }
}

export { UpdateAvaliacaoProductService }
import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   product_id: string;
}

class UpdateProductIdVariacaoService {
  async execute({ variacao_id, product_id }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        product_id: product_id,
      }
    })

    return updateVariacao;

  }
}

export { UpdateProductIdVariacaoService }
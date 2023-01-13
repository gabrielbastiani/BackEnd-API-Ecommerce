import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   skuVariacao: string;
}

class UpdateSkuVariacaoService {
  async execute({ variacao_id, skuVariacao }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        skuVariacao: skuVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdateSkuVariacaoService }
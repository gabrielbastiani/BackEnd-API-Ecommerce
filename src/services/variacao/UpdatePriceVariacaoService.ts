import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   priceVariacao: string;
}

class UpdatePriceVariacaoService {
  async execute({ variacao_id, priceVariacao }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        priceVariacao: priceVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdatePriceVariacaoService }
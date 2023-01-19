import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   preco: number;
}

class UpdatePriceVariacaoService {
  async execute({ variacao_id, preco }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        preco: preco,
      }
    })

    return updateVariacao;

  }
}

export { UpdatePriceVariacaoService }
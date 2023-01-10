import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   urlProduct: string;
}

class UpdateUrlVariacaoService {
  async execute({ variacao_id, urlProduct }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        urlProduct: urlProduct,
      }
    })

    return updateVariacao;

  }
}

export { UpdateUrlVariacaoService }
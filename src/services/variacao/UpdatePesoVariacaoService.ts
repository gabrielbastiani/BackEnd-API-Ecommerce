import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   pesoKGVariacao: string;
}

class UpdatePesoVariacaoService {
  async execute({ variacao_id, pesoKGVariacao }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        pesoKGVariacao: pesoKGVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdatePesoVariacaoService }
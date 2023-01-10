import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   nameVariacao: string;
}

class UpdateNameVariacaoService {
  async execute({ variacao_id, nameVariacao }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        nameVariacao: nameVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdateNameVariacaoService }
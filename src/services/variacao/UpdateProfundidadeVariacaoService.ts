import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   profundidadeCMVariacao: string;
}

class UpdateProfundidadeVariacaoService {
  async execute({ variacao_id, profundidadeCMVariacao }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        profundidadeCMVariacao: profundidadeCMVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdateProfundidadeVariacaoService }
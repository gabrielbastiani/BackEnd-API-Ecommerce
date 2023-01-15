import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   profundidadeCm: string;
}

class UpdateProfundidadeVariacaoService {
  async execute({ variacao_id, profundidadeCm }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        profundidadeCm: profundidadeCm,
      }
    })

    return updateVariacao;

  }
}

export { UpdateProfundidadeVariacaoService }
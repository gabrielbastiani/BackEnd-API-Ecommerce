import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   alturaCm: string;
}

class UpdateAlturaVariacaoService {
  async execute({ variacao_id, alturaCm }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        alturaCm: alturaCm,
      }
    })

    return updateVariacao;

  }
}

export { UpdateAlturaVariacaoService }
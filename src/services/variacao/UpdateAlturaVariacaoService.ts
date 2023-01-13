import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   alturaCMVariacao: string;
}

class UpdateAlturaVariacaoService {
  async execute({ variacao_id, alturaCMVariacao }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        alturaCMVariacao: alturaCMVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdateAlturaVariacaoService }
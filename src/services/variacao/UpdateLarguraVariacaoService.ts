import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   larguraCMVariacao: string;
}

class UpdateLarguraVariacaoService {
  async execute({ variacao_id, larguraCMVariacao }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        larguraCMVariacao: larguraCMVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdateLarguraVariacaoService }
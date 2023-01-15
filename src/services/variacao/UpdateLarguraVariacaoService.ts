import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   larguraCm: string;
}

class UpdateLarguraVariacaoService {
  async execute({ variacao_id, larguraCm }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        larguraCm: larguraCm,
      }
    })

    return updateVariacao;

  }
}

export { UpdateLarguraVariacaoService }
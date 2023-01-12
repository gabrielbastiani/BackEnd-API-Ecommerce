import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   descriptionVariacao5: string;
}

class UpdateDescriptionVariacao5Service {
  async execute({ variacao_id, descriptionVariacao5 }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        descriptionVariacao5: descriptionVariacao5,
      }
    })

    return updateVariacao;

  }
}

export { UpdateDescriptionVariacao5Service }
import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   descriptionVariacao2: string;
}

class UpdateDescriptionVariacao2Service {
  async execute({ variacao_id, descriptionVariacao2 }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        descriptionVariacao2: descriptionVariacao2,
      }
    })

    return updateVariacao;

  }
}

export { UpdateDescriptionVariacao2Service }
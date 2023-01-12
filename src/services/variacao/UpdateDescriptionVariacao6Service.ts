import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   descriptionVariacao6: string;
}

class UpdateDescriptionVariacao6Service {
  async execute({ variacao_id, descriptionVariacao6 }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        descriptionVariacao6: descriptionVariacao6,
      }
    })

    return updateVariacao;

  }
}

export { UpdateDescriptionVariacao6Service }
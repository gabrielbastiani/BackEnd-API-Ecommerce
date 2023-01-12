import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   descriptionVariacao1: string;
}

class UpdateDescriptionVariacao1Service {
  async execute({ variacao_id, descriptionVariacao1 }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        descriptionVariacao1: descriptionVariacao1,
      }
    })

    return updateVariacao;

  }
}

export { UpdateDescriptionVariacao1Service }
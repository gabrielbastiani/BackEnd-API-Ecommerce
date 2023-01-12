import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   descriptionVariacao3: string;
}

class UpdateDescriptionVariacao3Service {
  async execute({ variacao_id, descriptionVariacao3 }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        descriptionVariacao3: descriptionVariacao3,
      }
    })

    return updateVariacao;

  }
}

export { UpdateDescriptionVariacao3Service }
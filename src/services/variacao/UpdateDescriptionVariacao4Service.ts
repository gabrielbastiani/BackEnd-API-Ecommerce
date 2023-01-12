import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   descriptionVariacao4: string;
}

class UpdateDescriptionVariacao4Service {
  async execute({ variacao_id, descriptionVariacao4 }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        descriptionVariacao4: descriptionVariacao4,
      }
    })

    return updateVariacao;

  }
}

export { UpdateDescriptionVariacao4Service }
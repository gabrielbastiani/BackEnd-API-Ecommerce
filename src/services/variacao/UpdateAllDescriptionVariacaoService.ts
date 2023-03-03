import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: any;
  descriptionVariacao1: string;
  descriptionVariacao2: string;
  descriptionVariacao3: string;
  descriptionVariacao4: string;
  descriptionVariacao5: string;
  descriptionVariacao6: string;
}

class UpdateAllDescriptionVariacaoService {
  async execute({ variacao_id, descriptionVariacao1, descriptionVariacao2, descriptionVariacao3, descriptionVariacao4, descriptionVariacao5, descriptionVariacao6 }: VariacaoRequest) {
    const updateDescription1 = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        descriptionVariacao1: descriptionVariacao1,
      }
    })

    const updateDescription2 = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        descriptionVariacao2: descriptionVariacao2,
      }
    })

    const updateDescription3 = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        descriptionVariacao3: descriptionVariacao3,
      }
    })

    const updateDescription4 = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        descriptionVariacao4: descriptionVariacao4,
      }
    })

    const updateDescription5 = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        descriptionVariacao5: descriptionVariacao5,
      }
    })

    const updateDescription6 = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        descriptionVariacao6: descriptionVariacao6,
      }
    })

    return [updateDescription1, updateDescription2, updateDescription3, updateDescription4, updateDescription5, updateDescription6]

  }
}

export { UpdateAllDescriptionVariacaoService }
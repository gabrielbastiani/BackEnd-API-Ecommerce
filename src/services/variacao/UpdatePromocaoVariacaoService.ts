import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: any;
  promocaoVariacao: string;
}

class UpdatePromocaoVariacaoService {
  async execute({ variacao_id, promocaoVariacao }: VariacaoRequest) {
    const updateVariacao = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        promocaoVariacao: promocaoVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdatePromocaoVariacaoService }
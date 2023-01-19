import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: any;
  promocao: number;
}

class UpdatePromocaoVariacaoService {
  async execute({ variacao_id, promocao }: VariacaoRequest) {
    const updateVariacao = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        promocao: promocao,
      }
    })

    return updateVariacao;

  }
}

export { UpdatePromocaoVariacaoService }
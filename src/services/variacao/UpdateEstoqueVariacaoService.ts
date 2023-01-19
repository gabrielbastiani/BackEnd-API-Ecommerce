import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: any;
  estoqueVariacao: number;
}

class UpdateEstoqueVariacaoService {
  async execute({ variacao_id, estoqueVariacao }: VariacaoRequest) {
    const updateVariacao = await prismaClient.variacao.update({
      where: {
        id: String(variacao_id)
      },
      data: {
        estoqueVariacao: estoqueVariacao,
      }
    })

    return updateVariacao;

  }
}

export { UpdateEstoqueVariacaoService }
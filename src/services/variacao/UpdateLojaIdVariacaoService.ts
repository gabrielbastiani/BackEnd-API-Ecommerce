import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   loja_id: string;
}

class UpdateLojaIdVariacaoService {
  async execute({ variacao_id, loja_id }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        loja_id: loja_id,
      }
    })

    return updateVariacao;

  }
}

export { UpdateLojaIdVariacaoService }
import prismaClient from "../../prisma";

interface VariacaoRequest {
   variacao_id: any;
   pesoKg: string;
}

class UpdatePesoVariacaoService {
  async execute({ variacao_id, pesoKg }: VariacaoRequest){
    const updateVariacao = await prismaClient.variacao.update({
      where:{
        id: String(variacao_id)
      },
      data:{
        pesoKg: pesoKg,
      }
    })

    return updateVariacao;

  }
}

export { UpdatePesoVariacaoService }
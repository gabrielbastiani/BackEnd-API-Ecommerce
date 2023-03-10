import prismaClient from "../../prisma";

interface VariacaoRequest {
  variacao_id: string;
}

class DeleteVariacaoService {
  async execute({ variacao_id }: VariacaoRequest){
      const variacao = await prismaClient.variacao.delete({
        where:{
          id: variacao_id
        }
      })
  
      return variacao;
    }
    
}

export { DeleteVariacaoService }
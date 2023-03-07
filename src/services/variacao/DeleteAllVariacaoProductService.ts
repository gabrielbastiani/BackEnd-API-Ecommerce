import prismaClient from "../../prisma";

interface VariacaoRequest {
  product_id: string;
}

class DeleteAllVariacaoProductService {
  async execute({ product_id }: VariacaoRequest){
      const variacao = await prismaClient.variacao.deleteMany({
        where:{
          product_id: product_id
        }
      })
  
      return variacao;
    }
    
}

export { DeleteAllVariacaoProductService }
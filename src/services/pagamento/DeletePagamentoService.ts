import prismaClient from "../../prisma";

interface PagamentoRequest {
  pagamento_id: string;
}

class DeletePagamentoService {
  async execute({ pagamento_id }: PagamentoRequest){

      const pagamentoDelete = await prismaClient.pagamento.delete({
        where:{
          id: pagamento_id
        }
      })
  
      return pagamentoDelete;
    }
    
}

export { DeletePagamentoService }
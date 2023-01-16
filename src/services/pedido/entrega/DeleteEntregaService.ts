import prismaClient from "../../../prisma";

interface EntregaRequest {
  entrega_id: string;
}

class DeleteEntregaService {
  async execute({ entrega_id }: EntregaRequest){

      const entregaDelete = await prismaClient.entrega.delete({
        where:{
          id: entrega_id
        }
      })
  
      return entregaDelete;
    }
    
}

export { DeleteEntregaService }
import prismaClient from "../../../prisma";

interface CarrinhoRequest {
  carrinho_id: string;
}

class DeleteCarrinhoService {
  async execute({ carrinho_id }: CarrinhoRequest){

      const carrinhoDelete = await prismaClient.carrinho.delete({
        where:{
          id: carrinho_id 
        }
      })
  
      return carrinhoDelete;
    }
    
}

export { DeleteCarrinhoService }
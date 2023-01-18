import prismaClient from "../../../../prisma";

interface ItemRequest {
  item_id: string;
}

class DeleteItemService {
  async execute({ item_id }: ItemRequest){

      const itemDelete = await prismaClient.item.delete({
        where:{
          id: item_id 
        }
      })
  
      return itemDelete;
    }
    
}

export { DeleteItemService }
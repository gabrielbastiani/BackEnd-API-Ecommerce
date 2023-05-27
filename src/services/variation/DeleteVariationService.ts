import prismaClient from "../../prisma";

interface VariationRequest {
  variation_id: string;
}

class DeleteVariationService {
  async execute({ variation_id }: VariationRequest){
      const variation = await prismaClient.variation.delete({
        where:{
          id: variation_id
        }
      })
  
      return variation;
    }
    
}

export { DeleteVariationService }
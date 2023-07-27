import prismaClient from "../../prisma";

interface VariationRequest {
  productVariation_id: string;
}

class VariationDeleteService {
  async execute({ productVariation_id }: VariationRequest){
      const variation = await prismaClient.productVariation.delete({
        where:{
          id: productVariation_id
        }
      })
  
      return variation;
    }
    
}

export { VariationDeleteService }
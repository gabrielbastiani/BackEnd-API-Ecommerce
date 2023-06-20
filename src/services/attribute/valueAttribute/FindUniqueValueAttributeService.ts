import prismaClient from "../../../prisma";

interface ValueRequest {
   valueAttribute_id: string;
}

class FindUniqueValueAttributeService {
   async execute({ valueAttribute_id }: ValueRequest) {
      const attributes = await prismaClient.valueAttribute.findUnique({
         where: {
            id: valueAttribute_id
         }
      })

      return attributes;
   }
}

export { FindUniqueValueAttributeService }
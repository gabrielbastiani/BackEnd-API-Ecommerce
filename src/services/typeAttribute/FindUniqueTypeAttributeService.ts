import prismaClient from "../../prisma";

interface TypeRequest {
   typeAttribute_id: string;
}

class FindUniqueTypeAttributeService {
   async execute({ typeAttribute_id }: TypeRequest) {
      const attributes = await prismaClient.typeAttribute.findUnique({
         where: {
            id: typeAttribute_id
         }
      })

      return attributes;
   }
}

export { FindUniqueTypeAttributeService }
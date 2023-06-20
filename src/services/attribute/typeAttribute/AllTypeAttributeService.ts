import prismaClient from "../../../prisma";

class AllTypeAttributeService {
   async execute() {
      const attributes = await prismaClient.typeAttribute.findMany({
         include: {
            relationattributeproducts: true,
            valueattribute: true
         }
      })

      return attributes;
   }
}

export { AllTypeAttributeService }
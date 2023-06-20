import prismaClient from "../../../prisma";

class AllTypeAttributeService {
   async execute() {
      const attributes = await prismaClient.typeAttribute.findMany({
         include: {
            groupfilters: true,
            relationattributeproducts: true,
            store: true
         }
      })

      return attributes;
   }
}

export { AllTypeAttributeService }
import prismaClient from "../../../prisma";

interface AtributeRequest {
   type: string;
}

class AllValuesTypeAttributeService {
   async execute({ type }: AtributeRequest) {
      const attributes = await prismaClient.valueAttribute.findMany({
         where: {
            type: type
         },
         orderBy: {
            order: 'asc'
         },
         include: {
            _count: true,
            imageAttribute: true,
            typeAttribute: true
         }
      })

      return attributes;
   }
}

export { AllValuesTypeAttributeService }
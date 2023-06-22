import prismaClient from "../../../prisma";

class ValuesAttributeService {
   async execute() {
      const attributes = await prismaClient.valueAttribute.findMany({
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

export { ValuesAttributeService }
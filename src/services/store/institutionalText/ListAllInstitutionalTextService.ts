import prismaClient from "../../../prisma";

class ListAllInstitutionalTextService {
   async execute() {
      const allText = await prismaClient.institutionalText.findMany({
         include: {
            store: true
         },
         orderBy: {
            order: 'asc'
         }
      })

      return allText;
   }
}

export { ListAllInstitutionalTextService }
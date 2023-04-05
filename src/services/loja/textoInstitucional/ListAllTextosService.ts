import prismaClient from "../../../prisma";

class ListAllTextosService {
   async execute() {
      const allTextos = await prismaClient.textoInstitucional.findMany({
         orderBy: {
            order: 'asc'
         }
      })

      return allTextos;
   }
}

export { ListAllTextosService }
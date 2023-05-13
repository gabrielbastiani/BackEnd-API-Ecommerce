import { StatusAtributo } from "@prisma/client";
import prismaClient from "../../prisma";

class ListAtributosService {
   async execute() {
      const atributos = await prismaClient.atributo.findMany({
         where: {
            disponibilidade: StatusAtributo.Disponivel
         },
         orderBy: {
            order: 'asc'
         },
         include: {
            relationProductAtributos: true,
            imageatributos: true,
            filteratributos: true
         }
      })

      return atributos;
   }
}

export { ListAtributosService }
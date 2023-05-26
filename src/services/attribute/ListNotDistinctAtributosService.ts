import { StatusAtributo } from "@prisma/client";
import prismaClient from "../../prisma";

class ListNotDistinctAtributosService {
   async execute() {
      const atributos = await prismaClient.atributo.findMany({
         where: {
            disponibilidade: StatusAtributo.Disponivel
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

export { ListNotDistinctAtributosService }
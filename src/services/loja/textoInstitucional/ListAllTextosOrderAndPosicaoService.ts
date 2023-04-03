import { StatusTextoInstitucional } from "@prisma/client";
import prismaClient from "../../../prisma";

interface RequestTextos {
   slugPosicao: string;
}

class ListAllTextosOrderAndPosicaoService {
   async execute({ slugPosicao }: RequestTextos) {
      const allTextosOrder = await prismaClient.textoInstitucional.findMany({
         where: {
            disponibilidade: StatusTextoInstitucional.Disponivel,
            slugPosicao: slugPosicao
         },
         orderBy: {
            order: 'asc'
         }
      })

      return allTextosOrder;
   }
}

export { ListAllTextosOrderAndPosicaoService }
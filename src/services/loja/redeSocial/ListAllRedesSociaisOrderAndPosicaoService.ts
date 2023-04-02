import { StatusRedeSocial } from "@prisma/client";
import prismaClient from "../../../prisma";

interface RequestRedes {
   posicao: string;
}

class ListAllRedesSociaisOrderAndPosicaoService {
   async execute({ posicao }: RequestRedes) {
      const allRedesFilter = await prismaClient.redeSocial.findMany({
         where: {
            disponibilidade: StatusRedeSocial.Disponivel,
            posicao: posicao
         },
         orderBy: {
            order: 'asc'
         }
      })

      return allRedesFilter;
   }
}

export { ListAllRedesSociaisOrderAndPosicaoService }
import { StatusRedeSocial } from "@prisma/client";
import prismaClient from "../../../prisma";

interface RequestRedes {
   slugPosicao: string;
}

class ListAllRedesSociaisOrderAndPosicaoService {
   async execute({ slugPosicao }: RequestRedes) {
      const allRedesFilter = await prismaClient.socialMedia.findMany({
         where: {
            disponibilidade: StatusRedeSocial.Disponivel,
            slugPosicao: slugPosicao
         },
         orderBy: {
            order: 'asc'
         }
      })

      return allRedesFilter;
   }
}

export { ListAllRedesSociaisOrderAndPosicaoService }
import { StatusSocialMedia } from "@prisma/client";
import prismaClient from "../../../prisma";

interface MediaRequest {
   slugPosition: string;
}

class ListAllSocialMediaOrderAndPositionService {
   async execute({ slugPosition }: MediaRequest) {
      const allSocialMediaOrder = await prismaClient.socialMedia.findMany({
         where: {
            status: StatusSocialMedia.Disponivel,
            slugPosition: slugPosition
         },
         orderBy: {
            order: 'asc'
         }
      })

      return allSocialMediaOrder;
   }
}

export { ListAllSocialMediaOrderAndPositionService }
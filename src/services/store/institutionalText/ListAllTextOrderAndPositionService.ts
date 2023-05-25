import { StatusInstitutionalText } from "@prisma/client";
import prismaClient from "../../../prisma";

interface TextRequest {
   slugPosition: string;
}

class ListAllTextOrderAndPositionService {
   async execute({ slugPosition }: TextRequest) {
      const allTextOrder = await prismaClient.institutionalText.findMany({
         where: {
            status: StatusInstitutionalText.Disponivel,
            slugPosition: slugPosition
         },
         orderBy: {
            order: 'asc'
         }
      })

      return allTextOrder;
   }
}

export { ListAllTextOrderAndPositionService }
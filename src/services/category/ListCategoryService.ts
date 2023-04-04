import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

class ListCategoryService {
   async execute() {
      const category = await prismaClient.category.findMany({
         where: {
            disponibilidade: StatusCategory.Disponivel
         },
         include: {
            product: true,
            subcategories: true
         },
         orderBy: {
            order: 'asc'
         }
      })

      return category;
   }
}

export { ListCategoryService }
import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

class ListCategoryService {
   async execute() {
      const category = await prismaClient.category.findMany({
         where: {
            disponibilidade: StatusCategory.Disponivel
         },
         orderBy: {
            order: 'asc'
         },
         include: {
            relationproductcategories: true
         }
      })

      return category;
   }
}

export { ListCategoryService }
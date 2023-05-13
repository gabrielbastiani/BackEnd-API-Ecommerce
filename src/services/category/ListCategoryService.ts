import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

class ListCategoryService {
   async execute() {
      const category = await prismaClient.category.findMany({
         where: {
            disponibilidade: StatusCategory.Disponivel
         },
         orderBy: {
            created_at: 'asc'
         },
         include: {
            relationproductcategories: true,
            imagecategories: true
         }
      })

      return category;
   }
}

export { ListCategoryService }
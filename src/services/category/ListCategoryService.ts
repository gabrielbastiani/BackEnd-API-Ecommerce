import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

class ListCategoryService {
   async execute() {
      const category = await prismaClient.category.findMany({
         where: {
            status: StatusCategory.Disponivel
         },
         orderBy: {
            created_at: 'asc'
         },
         include: {
            filtercategories: true,
            imagecategories: true,
            menucategories: true,
            productcategories: true
         }
      });

      return category;
   }
}

export { ListCategoryService }
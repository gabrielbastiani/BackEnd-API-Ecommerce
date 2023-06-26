import { StatusMenuCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

class AllCategoriesMenuService {
   async execute() {
      const categories = await prismaClient.menuCategory.findMany({
         where: {
            status: StatusMenuCategory.Disponivel
         },
         orderBy: {
            created_at: 'asc'
         },
         include: {
            category: true,
            imagemenucategories: true
         }
      });

      return categories;
   }
}

export { AllCategoriesMenuService }
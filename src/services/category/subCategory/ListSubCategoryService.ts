import { StatusSubCategory } from "@prisma/client";
import prismaClient from "../../../prisma";

class ListSubCategoryService {
   async execute() {
      const subCategory = await prismaClient.subCategory.findMany({
         where: {
            disponibilidade: StatusSubCategory.Disponivel
         },
         include: {
            category: true,
            product: true,
            loja: true
         },
         orderBy: {
            order: 'asc'
         }
      })

      return subCategory;
   }
}

export { ListSubCategoryService }
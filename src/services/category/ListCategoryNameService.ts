import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

interface CategoryRequest {
   category_id: string;
}

class ListCategoryNameService {
   async execute({ category_id }: CategoryRequest) {
      const category = await prismaClient.category.findMany({
         where: {
            id: category_id,
            status: StatusCategory.Disponivel
         },
         orderBy: {
            created_at: 'asc'
         }
      })

      return category;
   }
}

export { ListCategoryNameService }
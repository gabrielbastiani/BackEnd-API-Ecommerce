import prismaClient from "../../prisma";

class ListCategoryService {
   async execute() {

      const category = await prismaClient.category.findMany({
         include: {
            loja: true,
            products: true,
         },
         orderBy: {
            created_at: 'desc'
         }
      })

      return category;
   }
}

export { ListCategoryService }
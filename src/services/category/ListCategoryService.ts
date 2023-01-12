import prismaClient from "../../prisma";

class ListCategoryService {
   async execute() {

      const category = await prismaClient.category.findMany({
         select: {
            id: true,
            categoryName: true,
            codigo: true,
            disponibilidade: true,
            created_at: true,
            products: true
         },
         orderBy: {
            created_at: 'desc'
         }
      })

      return category;
   }
}

export { ListCategoryService }
import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

interface CategoryRequest {
   parentId: string;
}

class ListAllCategoriesStorePageService {
   async execute({ parentId }: CategoryRequest) {
      const category = await prismaClient.category.findMany({
         where: {
            parentId: parentId,
            status: StatusCategory.Disponivel
         },
         orderBy: {
            order: 'asc'
         },
         include: {
            filtercategories: true,
            imagecategories: true,
            menucategories: true,
            productcategories: {include: {product: {include: {photoproducts: true}}}}
         }
      })

      return category;
   }
}

export { ListAllCategoriesStorePageService }
import { StatusCategory } from "@prisma/client";
import prismaClient from "../../prisma";

interface CategoryRequest {
   slug: string;
}

class ListAllCategoriesStorePageService {
   async execute({ slug }: CategoryRequest) {
      const category = await prismaClient.category.findMany({
         where: {
            slug: slug,
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
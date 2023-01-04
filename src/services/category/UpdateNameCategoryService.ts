import prismaClient from "../../prisma";

interface CategoryRequest{
   category_id: any;
   categoryName: string;
}

class UpdateNameCategoryService {
  async execute({ category_id, categoryName }: CategoryRequest){
    const updateCategory = await prismaClient.category.update({
      where:{
        id: String(category_id)
      },
      data:{
        categoryName: categoryName,
      }
    })

    return updateCategory;

  }
}

export { UpdateNameCategoryService }
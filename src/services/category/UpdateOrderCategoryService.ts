import prismaClient from "../../prisma";

interface CategoryRequest{
   category_id: any;
   order: number;
}

class UpdateOrderCategoryService {
  async execute({ category_id, order }: CategoryRequest){
    const updateCategory = await prismaClient.category.update({
      where:{
        id: String(category_id)
      },
      data:{
        order: order,
      }
    })

    return updateCategory;

  }
}

export { UpdateOrderCategoryService }
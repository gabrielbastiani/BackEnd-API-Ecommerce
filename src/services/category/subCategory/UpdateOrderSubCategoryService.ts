import prismaClient from "../../../prisma";

interface SubCategoryRequest {
   subcategory_id: any;
   order: number;
}

class UpdateOrderSubCategoryService {
  async execute({ subcategory_id, order }: SubCategoryRequest){
    const updateCategory = await prismaClient.subCategory.update({
      where:{
        id: String(subcategory_id)
      },
      data:{
        order: order,
      }
    })

    return updateCategory;

  }
}

export { UpdateOrderSubCategoryService }
import prismaClient from "../../../prisma";

interface SubCategoryRequest {
  subcategory_id: any;
  category_id: string;
}

class UpdateCategorySubCategoryService {
  async execute({ subcategory_id, category_id }: SubCategoryRequest) {
    const updateCategory = await prismaClient.subCategory.update({
      where: {
        id: String(subcategory_id)
      },
      data: {
        category_id: category_id
      }
    })

    return updateCategory;

  }
}

export { UpdateCategorySubCategoryService }
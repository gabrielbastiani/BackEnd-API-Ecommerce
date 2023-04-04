import prismaClient from "../../../prisma";

interface SubCategoryRequest {
  subcategory_id: any;
  product_id: string;
}

class UpdateProductSubCategoryService {
  async execute({ subcategory_id, product_id }: SubCategoryRequest) {
    const updateCategory = await prismaClient.subCategory.update({
      where: {
        id: String(subcategory_id)
      },
      data: {
        product_id: product_id
      }
    })

    return updateCategory;

  }
}

export { UpdateProductSubCategoryService }
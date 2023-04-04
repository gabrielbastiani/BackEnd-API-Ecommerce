import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: any;
  product_id: string;
}

class UpdateProductCategoryService {
  async execute({ category_id, product_id }: CategoryRequest) {
    const updateCategory = await prismaClient.category.update({
      where: {
        id: String(category_id)
      },
      data: {
        product_id: product_id
      }
    })

    return updateCategory;

  }
}

export { UpdateProductCategoryService }
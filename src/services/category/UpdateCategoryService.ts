import prismaClient from "../../prisma";

interface CategoryRequest {
  categoryName: string;
  category_id: string;
}

class UpdateCategoryService {
  async execute({ category_id }: CategoryRequest) {

    const category = await prismaClient.category.update({
      where: {
        id: category_id
      },
      data: {
        categoryName: categoryName,
      }
    })

    return category;
  }

}

export { UpdateCategoryService }
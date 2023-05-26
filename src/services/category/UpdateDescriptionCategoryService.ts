import prismaClient from "../../prisma";

interface CategoryRequest {
  category_id: string;
  description: string;
}

class UpdateDescriptionCategoryService {
  async execute({ category_id, description }: CategoryRequest) {
    const updateCategory = await prismaClient.category.update({
      where: {
        id: category_id
      },
      data: {
        description: description
      }
    });

    return updateCategory;

  }
}

export { UpdateDescriptionCategoryService }
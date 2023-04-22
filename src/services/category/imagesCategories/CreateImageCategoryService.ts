import prismaClient from "../../../prisma";

interface CategoryRequest {
  categoryImage: string;
  category_id: string;
}

class CreateImageCategoryService {
  async execute({ categoryImage, category_id }: CategoryRequest) {
    const category = await prismaClient.imageCategory.create({
      data: {
        categoryImage: categoryImage,
        category_id: category_id
      }
    });

    return category;

  }
}

export { CreateImageCategoryService }
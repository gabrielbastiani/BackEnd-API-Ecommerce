import prismaClient from "../../../prisma";

interface CategoryRequest {
  image: string;
  category_id: string;
}

class CreateImageCategoryService {
  async execute({ image, category_id }: CategoryRequest) {
    const category = await prismaClient.imageCategory.create({
      data: {
        image: image,
        category_id: category_id
      }
    });

    return category;

  }
}

export { CreateImageCategoryService }
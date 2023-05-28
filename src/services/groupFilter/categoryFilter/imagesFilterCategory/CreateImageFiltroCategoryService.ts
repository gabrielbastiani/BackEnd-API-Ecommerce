import prismaClient from "../../../../prisma";

interface CategoryFilterRequest {
  imageCategory: string;
  filterCategory_id: string;
}

class CreateImageFiltroCategoryService {
  async execute({ imageCategory, filterCategory_id }: CategoryFilterRequest) {
    const category = await prismaClient.imageFilterCategory.create({
      data: {
        imageCategory: imageCategory,
        filterCategory_id: filterCategory_id
      }
    });

    return category;

  }
}

export { CreateImageFiltroCategoryService }
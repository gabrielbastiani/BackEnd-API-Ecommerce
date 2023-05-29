import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageCategory: string;
  filterCategory_id: string;
}

class CreateImageFilterCategoryService {
  async execute({ imageCategory, filterCategory_id }: ImageRequest) {
    const image = await prismaClient.imageFilterCategory.create({
      data: {
        imageCategory: imageCategory,
        filterCategory_id: filterCategory_id
      }
    });

    return image;

  }
}

export { CreateImageFilterCategoryService }
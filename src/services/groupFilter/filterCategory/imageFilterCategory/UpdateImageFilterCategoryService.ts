import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterCategory_id: string;
  imageCategory: string;
}

class UpdateImageFilterCategoryService {
  async execute({ imageFilterCategory_id, imageCategory }: ImageRequest) {
    const updateImage = await prismaClient.imageFilterCategory.update({
      where: {
        id: imageFilterCategory_id
      },
      data: {
        imageCategory: imageCategory,
      }
    })

    return updateImage;

  }
}

export { UpdateImageFilterCategoryService }
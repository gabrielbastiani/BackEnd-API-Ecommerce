import prismaClient from "../../../prisma";

interface ImageRequest {
  imageCategory_id: string;
  categoryImage: string;
}

class UpdateImageCategoryService {
  async execute({ imageCategory_id, categoryImage }: ImageRequest) {
    const updateImageCategoies = await prismaClient.imageCategory.update({
      where: {
        id: imageCategory_id
      },
      data: {
        categoryImage: categoryImage,
      }
    })

    return updateImageCategoies;

  }
}

export { UpdateImageCategoryService }
import prismaClient from "../../../prisma";

interface ImageRequest {
  imageCategory_id: any;
  categoryImage: string;
}

class UpdateImageCategoryService {
  async execute({ imageCategory_id, categoryImage }: ImageRequest) {
    const updatePhoto = await prismaClient.imageCategory.update({
      where: {
        id: String(imageCategory_id)
      },
      data: {
        categoryImage: categoryImage,
      }
    })

    return updatePhoto;

  }
}

export { UpdateImageCategoryService }
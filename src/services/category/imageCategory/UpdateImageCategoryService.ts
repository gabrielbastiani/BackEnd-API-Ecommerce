import prismaClient from "../../../prisma";

interface ImageRequest {
  imageCategory_id: string;
  image: string;
}

class UpdateImageCategoryService {
  async execute({ imageCategory_id, image }: ImageRequest) {
    const updateImageCategoies = await prismaClient.imageCategory.update({
      where: {
        id: imageCategory_id
      },
      data: {
        image: image,
      }
    })

    return updateImageCategoies;

  }
}

export { UpdateImageCategoryService }
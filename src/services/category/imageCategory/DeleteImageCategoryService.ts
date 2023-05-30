import prismaClient from "../../../prisma";

interface ImageRequest {
  imageCategory_id: string;
}

class DeleteImageCategoryService {
  async execute({ imageCategory_id }: ImageRequest) {
    const deleteImage = await prismaClient.imageCategory.delete({
      where: {
        id: imageCategory_id
      }
    })

    return deleteImage;

  }
}

export { DeleteImageCategoryService }
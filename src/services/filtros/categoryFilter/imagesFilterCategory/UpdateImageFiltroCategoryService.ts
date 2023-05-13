import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterCategory_id: string;
  imageCategory: string;
}

class UpdateImageFiltroCategoryService {
  async execute({ imageFilterCategory_id, imageCategory }: ImageRequest) {
    const updateImageFiltro = await prismaClient.imageFilterCategory.update({
      where: {
        id: imageFilterCategory_id
      },
      data: {
        imageCategory: imageCategory,
      }
    })

    return updateImageFiltro;

  }
}

export { UpdateImageFiltroCategoryService }
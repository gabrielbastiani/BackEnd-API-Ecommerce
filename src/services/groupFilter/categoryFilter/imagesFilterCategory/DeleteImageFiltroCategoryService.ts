import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterCategory_id: string;
}

class DeleteImageFiltroCategoryService {
  async execute({ imageFilterCategory_id }: ImageRequest) {
    const deleteImage = await prismaClient.imageFilterCategory.delete({
      where: {
        id: imageFilterCategory_id
      }
    });

    return deleteImage;

  }
}

export { DeleteImageFiltroCategoryService }
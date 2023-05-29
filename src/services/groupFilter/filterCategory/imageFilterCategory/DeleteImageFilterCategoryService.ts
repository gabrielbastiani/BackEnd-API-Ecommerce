import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterCategory_id: string;
}

class DeleteImageFilterCategoryService {
  async execute({ imageFilterCategory_id }: ImageRequest) {
    const deleteImage = await prismaClient.imageFilterCategory.delete({
      where: {
        id: imageFilterCategory_id
      }
    });

    return deleteImage;

  }
}

export { DeleteImageFilterCategoryService }
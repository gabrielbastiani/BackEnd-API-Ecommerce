import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageMenuCategory_id: string;
  image: string;
}

class UpdateImageMenuCategoryService {
  async execute({ imageMenuCategory_id, image }: ImageRequest) {
    const updateImage = await prismaClient.imageMenuCategory.update({
      where: {
        id: imageMenuCategory_id
      },
      data: {
        image: image,
      }
    })

    return updateImage;

  }
}

export { UpdateImageMenuCategoryService }
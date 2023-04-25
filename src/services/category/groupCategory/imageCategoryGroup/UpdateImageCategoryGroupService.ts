import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageGroupCategory_id: string;
  imageGroup: string;
}

class UpdateImageCategoryGroupService {
  async execute({ imageGroupCategory_id, imageGroup }: ImageRequest) {
    const updateImageCategoies = await prismaClient.imageGroupCategory.update({
      where: {
        id: imageGroupCategory_id
      },
      data: {
        imageGroup: imageGroup,
      }
    })

    return updateImageCategoies;

  }
}

export { UpdateImageCategoryGroupService }
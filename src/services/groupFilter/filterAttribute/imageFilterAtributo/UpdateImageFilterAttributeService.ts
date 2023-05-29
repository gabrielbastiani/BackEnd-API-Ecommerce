import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterAttribute_id: string;
  imageAttribute: string;
}

class UpdateImageFilterAttributeService {
  async execute({ imageFilterAttribute_id, imageAttribute }: ImageRequest) {
    const updateImage = await prismaClient.imageFilterAttribute.update({
      where: {
        id: imageFilterAttribute_id
      },
      data: {
        imageAttribute: imageAttribute,
      }
    })

    return updateImage;

  }
}

export { UpdateImageFilterAttributeService }
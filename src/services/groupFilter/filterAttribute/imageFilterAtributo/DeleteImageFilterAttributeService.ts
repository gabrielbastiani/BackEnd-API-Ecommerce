import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageFilterAttribute_id: string;
}

class DeleteImageFilterAttributeService {
  async execute({ imageFilterAttribute_id }: ImageRequest) {
    const deleteImage = await prismaClient.imageFilterAttribute.delete({
      where: {
        id: imageFilterAttribute_id
      }
    });

    return deleteImage;

  }
}

export { DeleteImageFilterAttributeService }
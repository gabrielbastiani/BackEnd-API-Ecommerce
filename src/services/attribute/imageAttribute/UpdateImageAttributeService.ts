import prismaClient from "../../../../prisma";

interface ImageAttributeRequest {
  imageAttribute_id: string;
  image: string;
}

class UpdateImageAttributeService {
  async execute({ imageAttribute_id, image }: ImageAttributeRequest) {
    const updateImage = await prismaClient.imageAttribute.update({
      where: {
        id: imageAttribute_id
      },
      data: {
        image: image,
      }
    })

    return updateImage;

  }
}

export { UpdateImageAttributeService }
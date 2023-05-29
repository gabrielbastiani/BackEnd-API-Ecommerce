import prismaClient from "../../../../prisma";

interface ImageRequest {
  imageAttribute: string;
  filterAttribute_id: string;
}

class CreateImageFilterAttributeService {
  async execute({ imageAttribute, filterAttribute_id }: ImageRequest) {
    const attributeImage = await prismaClient.imageFilterAttribute.create({
      data: {
        imageAttribute: imageAttribute,
        filterAttribute_id: filterAttribute_id
      }
    });

    return attributeImage;

  }
}

export { CreateImageFilterAttributeService }
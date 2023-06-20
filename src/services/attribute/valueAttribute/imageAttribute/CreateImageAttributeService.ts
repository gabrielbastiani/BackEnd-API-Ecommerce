import prismaClient from "../../../../prisma";

interface ImageAttributeRequest {
  image: string;
  valueAttribute_id: string;
}

class CreateImageAttributeService {
  async execute({ image, valueAttribute_id }: ImageAttributeRequest) {
    const attribute = await prismaClient.imageAttribute.create({
      data: {
        image: image,
        valueAttribute_id: valueAttribute_id,
      }
    });

    return attribute;

  }
}

export { CreateImageAttributeService }
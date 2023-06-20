import prismaClient from "../../../../prisma";

interface ImageAttributeRequest {
  image: string;
  relationAttributeProduct_id: string;
  product_id: string;
}

class CreateImageAttributeService {
  async execute({ image, relationAttributeProduct_id, product_id }: ImageAttributeRequest) {
    const attribute = await prismaClient.imageAttribute.create({
      data: {
        image: image,
        relationAttributeProduct_id: relationAttributeProduct_id,
        product_id: product_id
      }
    });

    return attribute;

  }
}

export { CreateImageAttributeService }
import prismaClient from "../../../../prisma";

interface ImageAttributeRequest {
  product_id: string;
}

class DeleteImageAttributeProductIDService {
  async execute({ product_id }: ImageAttributeRequest) {
    const attribute = await prismaClient.imageAttribute.deleteMany({
      where: {
        product_id: product_id
      }
    })

    return attribute;
  }

}

export { DeleteImageAttributeProductIDService }
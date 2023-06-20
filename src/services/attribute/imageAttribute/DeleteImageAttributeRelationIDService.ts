import prismaClient from "../../../../prisma";

interface ImageAttributeRequest {
  relationAttributeProduct_id: string;
}

class DeleteImageAttributeRelationIDService {
  async execute({ relationAttributeProduct_id }: ImageAttributeRequest) {
    const attribute = await prismaClient.imageAttribute.deleteMany({
      where: {
        relationAttributeProduct_id: relationAttributeProduct_id
      }
    })

    return attribute;
  }

}

export { DeleteImageAttributeRelationIDService }
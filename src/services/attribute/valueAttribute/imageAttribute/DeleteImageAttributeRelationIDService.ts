import prismaClient from "../../../../prisma";

interface ImageAttributeRequest {
  valueAttribute_id: string;
}

class DeleteImageAttributeRelationIDService {
  async execute({ valueAttribute_id }: ImageAttributeRequest) {
    const attribute = await prismaClient.imageAttribute.deleteMany({
      where: {
        valueAttribute_id: valueAttribute_id
      }
    })

    return attribute;
  }

}

export { DeleteImageAttributeRelationIDService }
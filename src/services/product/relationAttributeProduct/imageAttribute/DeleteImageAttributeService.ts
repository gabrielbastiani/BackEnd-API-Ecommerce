import prismaClient from "../../../../prisma";

interface ImageAttributeRequest {
  imageAttribute_id: string;
}

class DeleteImageAttributeService {
  async execute({ imageAttribute_id }: ImageAttributeRequest) {
    const attribute = await prismaClient.imageAttribute.delete({
      where: {
        id: imageAttribute_id
      }
    })

    return attribute;
  }

}

export { DeleteImageAttributeService }
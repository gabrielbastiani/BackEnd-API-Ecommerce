import prismaClient from "../../../prisma";

interface DescriptionRequest {
  descriptionProduct_id: string;
}

class DeleteDescriptionProductService {
  async execute({ descriptionProduct_id }: DescriptionRequest) {
    const descriptionDelete = await prismaClient.descriptionProduct.delete({
      where: {
        id: descriptionProduct_id
      }
    })

    return descriptionDelete;
  }

}

export { DeleteDescriptionProductService }
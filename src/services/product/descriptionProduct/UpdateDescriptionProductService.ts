import prismaClient from "../../../prisma";

interface DescriptionRequest {
  descriptionProduct_id: string;
  description: string;
}

class UpdateDescriptionProductService {
  async execute({ description, descriptionProduct_id }: DescriptionRequest) {
    const descriptionProducts = await prismaClient.descriptionProduct.update({
      where: {
        id: descriptionProduct_id
      },
      data: {
        description: description
      }
    });

    return descriptionProducts;

  }
}

export { UpdateDescriptionProductService }
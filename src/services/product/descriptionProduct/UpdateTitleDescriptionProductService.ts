import prismaClient from "../../../prisma";

interface DescriptionRequest {
  descriptionProduct_id: string;
  title: string;
}

class UpdateTitleDescriptionProductService {
  async execute({ title, descriptionProduct_id }: DescriptionRequest) {
    const descriptionProducts = await prismaClient.descriptionProduct.update({
      where: {
        id: descriptionProduct_id
      },
      data: {
        title: title
      }
    });

    return descriptionProducts;

  }
}

export { UpdateTitleDescriptionProductService }
import prismaClient from "../../../prisma";

interface DescriptionRequest {
  descriptionProduct_id: string;
  order: number;
}

class UpdateOrderDescriptionProductService {
  async execute({ descriptionProduct_id, order }: DescriptionRequest) {
    const descriptionProducts = await prismaClient.descriptionProduct.update({
      where: {
        id: descriptionProduct_id
      },
      data: {
        order: order,
      }
    })

    return descriptionProducts;

  }
}

export { UpdateOrderDescriptionProductService }
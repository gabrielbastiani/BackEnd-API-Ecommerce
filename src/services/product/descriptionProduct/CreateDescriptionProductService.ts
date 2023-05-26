import prismaClient from "../../../prisma";

interface DescriptionRequest {
  product_id: string;
  title: string;
  description: string;
  order: number;
}

class CreateDescriptionProductService {
  async execute({ title, product_id, description, order }: DescriptionRequest) {
    const descriptionProducts = await prismaClient.descriptionProduct.create({
      data: {
        title: title,
        product_id: product_id,
        description: description,
        order: order
      }
    });

    return descriptionProducts;

  }
}

export { CreateDescriptionProductService }
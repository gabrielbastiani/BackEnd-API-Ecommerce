import prismaClient from "../../../prisma";

interface DescriptionRequest {
  descriptionProduct_id: string;
}

class FindUniqueDescriptionProductService {
  async execute({ descriptionProduct_id }: DescriptionRequest) {
    const descriptionProduct = await prismaClient.descriptionProduct.findUnique({
      where: {
        id: descriptionProduct_id
      }
    })

    return descriptionProduct;

  }
}

export { FindUniqueDescriptionProductService }
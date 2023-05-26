import prismaClient from "../../../prisma";

interface DescriptionRequest {
  product_id: string;
}

class DeleteAllDescriptionProductService {
  async execute({ product_id }: DescriptionRequest) {
    const descriptionProduct = await prismaClient.descriptionProduct.deleteMany({
      where: {
        product_id: product_id
      }
    })

    return descriptionProduct;
  }

}

export { DeleteAllDescriptionProductService }
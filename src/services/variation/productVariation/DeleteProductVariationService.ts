import prismaClient from "../../../prisma";

interface VariationRequest {
  variation_id: string;
}

class DeleteProductVariationService {
  async execute({ variation_id }: VariationRequest) {
    const variation = await prismaClient.productVariation.deleteMany({
      where: {
        variation_id: variation_id
      }
    })

    return variation;
  }

}

export { DeleteProductVariationService }
import prismaClient from "../../../prisma";

interface VariationRequest {
  product_id: string;
}

class DeleteAllVariationProductService {
  async execute({ product_id }: VariationRequest) {
    const variation = await prismaClient.productVariation.deleteMany({
      where: {
        product_id: product_id
      }
    })

    return variation;
  }

}

export { DeleteAllVariationProductService }
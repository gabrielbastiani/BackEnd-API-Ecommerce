import prismaClient from "../../../prisma";

interface VariationRequest {
  productVariation_id: string;
}

class DeleteVariationProductService {
  async execute({ productVariation_id }: VariationRequest) {
    const variation = await prismaClient.productVariation.delete({
      where: {
        id: productVariation_id
      }
    })

    return variation;
  }

}

export { DeleteVariationProductService }
import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
  product_id: string;
}

class UpdateProductBuyTogetherService {
  async execute({ buyTogether_id, product_id }: BuyTogetherRequest) {
    const updateBuy = await prismaClient.buyTogether.update({
      where: {
        id: buyTogether_id
      },
      data: {
        product_id: product_id,
      }
    })

    return updateBuy;

  }
}

export { UpdateProductBuyTogetherService }
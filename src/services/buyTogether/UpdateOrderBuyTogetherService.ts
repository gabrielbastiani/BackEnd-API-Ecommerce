import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
  order: number;
}

class UpdateOrderBuyTogetherService {
  async execute({ buyTogether_id, order }: BuyTogetherRequest) {
    const updateBuy = await prismaClient.buyTogether.update({
      where: {
        id: buyTogether_id
      },
      data: {
        order: order,
      }
    })

    return updateBuy;

  }
}

export { UpdateOrderBuyTogetherService }
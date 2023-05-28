import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
  nameGroup: string;
}

class UpdateNameGroupBuyTogetherService {
  async execute({ buyTogether_id, nameGroup }: BuyTogetherRequest) {
    const updateBuy = await prismaClient.buyTogether.update({
      where: {
        id: buyTogether_id
      },
      data: {
        nameGroup: nameGroup,
      }
    })

    return updateBuy;

  }
}

export { UpdateNameGroupBuyTogetherService }
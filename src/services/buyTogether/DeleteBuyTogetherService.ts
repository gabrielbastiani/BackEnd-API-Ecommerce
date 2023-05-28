import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
}

class DeleteBuyTogetherService {
  async execute({ buyTogether_id }: BuyTogetherRequest) {
    const deleteBuy = await prismaClient.buyTogether.delete({
      where: {
        id: buyTogether_id
      }
    })

    return deleteBuy;

  }
}

export { DeleteBuyTogetherService }
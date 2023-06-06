import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  parentId: string;
}

class DeleteBuyTogetherAllProductService {
  async execute({ parentId }: BuyTogetherRequest) {
    const deleteBuy = await prismaClient.buyTogether.deleteMany({
      where: {
        parentId: parentId
      }
    });

    return deleteBuy;

  }
}

export { DeleteBuyTogetherAllProductService }
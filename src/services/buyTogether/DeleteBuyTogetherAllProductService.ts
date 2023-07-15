import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  product_id: string;
}

class DeleteBuyTogetherAllProductService {
  async execute({ product_id }: BuyTogetherRequest) {
    const deleteBuy = await prismaClient.buyTogether.deleteMany({
      where: {
        product_id: product_id
      }
    });

    return deleteBuy;

  }
}

export { DeleteBuyTogetherAllProductService }
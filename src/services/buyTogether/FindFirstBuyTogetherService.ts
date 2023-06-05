import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
}

class FindFirstBuyTogetherService {
  async execute({ buyTogether_id }: BuyTogetherRequest) {
    const find = await prismaClient.buyTogether.findFirst({
      where: {
        id: buyTogether_id
      },
      orderBy: {
        created_at: 'desc'
      },
      include: {
        product: true,
        products: true
      }
    })

    return find;

  }
}

export { FindFirstBuyTogetherService }
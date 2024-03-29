import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  buyTogether_id: string;
}

class FindUniqueBuyTogetherService {
  async execute({ buyTogether_id }: BuyTogetherRequest) {
    const find = await prismaClient.buyTogether.findUnique({
      where: {
        id: buyTogether_id
      },
      include: {
        product: true,
        products: true
      }
    })

    return find;

  }
}

export { FindUniqueBuyTogetherService }
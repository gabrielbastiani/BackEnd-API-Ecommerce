import prismaClient from "../../prisma";

class AllBuyTogetherService {
  async execute() {
    const find = await prismaClient.buyTogether.findMany({
      where: {
        parentId: null
      },
      orderBy: {
        created_at: 'asc'
      },
      include: {
        product: true,
        products: true
      }
    })

    return find;

  }
}

export { AllBuyTogetherService }
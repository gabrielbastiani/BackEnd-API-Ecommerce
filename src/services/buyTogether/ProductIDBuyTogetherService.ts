import prismaClient from "../../prisma";

interface BuyRequest {
  product_id: string;
}

class ProductIDBuyTogetherService {
  async execute({ product_id }: BuyRequest) {
    const find = await prismaClient.buyTogether.findFirst({
      where: {
        parentId: null,
        product_id: product_id
      },
      include: {
        product: true,
        products: true
      }
    })

    return find;

  }
}

export { ProductIDBuyTogetherService }
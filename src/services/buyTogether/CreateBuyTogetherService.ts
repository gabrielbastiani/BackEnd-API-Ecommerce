import prismaClient from "../../prisma";

interface BuyTogetherRequest {
  nameGroup: string;
  product_id: string;
  nivel: number;
  parentId: string;
  order: number;
  store_id: string;
}

class CreateBuyTogetherService {
  async execute({ nameGroup, product_id, nivel, parentId, order, store_id }: BuyTogetherRequest) {
    const together = await prismaClient.buyTogether.create({
      data: {
        nameGroup: nameGroup,
        product_id: product_id,
        nivel: nivel,
        parentId: parentId,
        order: order,
        store_id: store_id
      }
    });

    return together;

  }
}

export { CreateBuyTogetherService }
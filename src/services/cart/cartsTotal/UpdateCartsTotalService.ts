import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  total: number;
}

class UpdateCartsTotalService {
  async execute({
    store_cart_id,
    total
  }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.updateMany({
      where: {
        store_cart_id: store_cart_id,
      },
      data: {
        total: total
      }
    });

    return cart;

  }
}

export { UpdateCartsTotalService }
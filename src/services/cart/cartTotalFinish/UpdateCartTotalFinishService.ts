import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  totalCartFinish: number;
}

class UpdateCartTotalFinishService {
  async execute({
    store_cart_id,
    totalCartFinish
  }: CartTotalRequest) {
    const cart = await prismaClient.cartTotalFinish.updateMany({
      where: {
        store_cart_id: store_cart_id,
      },
      data: {
        totalCartFinish: totalCartFinish
      }
    });

    return cart;

  }
}

export { UpdateCartTotalFinishService }
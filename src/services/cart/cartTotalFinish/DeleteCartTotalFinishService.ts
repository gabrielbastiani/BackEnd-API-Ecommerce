import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
}

class DeleteCartTotalFinishService {
  async execute({ store_cart_id }: CartTotalRequest) {
    const cart = await prismaClient.cartTotalFinish.deleteMany({
      where: {
        store_cart_id: store_cart_id
      }
    });

    return cart;

  }
}

export { DeleteCartTotalFinishService }
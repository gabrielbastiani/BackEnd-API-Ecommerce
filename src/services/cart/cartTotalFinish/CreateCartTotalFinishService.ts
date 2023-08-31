import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  totalCartFinish: number;
}

class CreateCartTotalFinishService {
  async execute({ store_cart_id, totalCartFinish }: CartTotalRequest) {
    const cart = await prismaClient.cartTotalFinish.create({
      data: {
        store_cart_id: store_cart_id,
        totalCartFinish: totalCartFinish
      }
    });

    return cart;

  }
}

export { CreateCartTotalFinishService }
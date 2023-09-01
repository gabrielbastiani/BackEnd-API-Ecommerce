import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  totalCartFinish: number;
  customer_id: string;
}

class CreateCartTotalFinishService {
  async execute({ store_cart_id, totalCartFinish, customer_id }: CartTotalRequest) {
    const cart = await prismaClient.cartTotalFinish.create({
      data: {
        store_cart_id: store_cart_id,
        totalCartFinish: totalCartFinish,
        customer_id: customer_id
      }
    });

    return cart;

  }
}

export { CreateCartTotalFinishService }
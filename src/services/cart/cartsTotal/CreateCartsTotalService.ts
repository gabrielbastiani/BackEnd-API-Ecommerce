import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  total: number;
  customer_id: string;
}

class CreateCartsTotalService {
  async execute({ store_cart_id, total, customer_id }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.create({
      data: {
        store_cart_id: store_cart_id,
        total: total,
        customer_id: customer_id
      }
    });

    return cart;

  }
}

export { CreateCartsTotalService }
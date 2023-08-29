import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  total: number;
}

class CreateCartsTotalService {
  async execute({ store_cart_id, total }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.create({
      data: {
        store_cart_id: store_cart_id,
        total: total
      }
    });

    return cart;

  }
}

export { CreateCartsTotalService }
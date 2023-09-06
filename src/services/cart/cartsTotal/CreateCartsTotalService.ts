import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  total: number;
  customer_id: string;
  cep: string;
}

class CreateCartsTotalService {
  async execute({ store_cart_id, total, customer_id, cep }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.create({
      data: {
        store_cart_id: store_cart_id,
        total: total,
        customer_id: customer_id,
        cep: cep
      }
    });

    return cart;

  }
}

export { CreateCartsTotalService }
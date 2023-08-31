import prismaClient from "../../prisma";

interface CartRequest {
  store_cart_id: string;
  product_id: string;
  amount: number;
  total: number;
  customer_id: string;
}

class UpdateCartService {
  async execute({
    store_cart_id,
    product_id,
    amount,
    total,
    customer_id
  }: CartRequest) {
    const cart = await prismaClient.cart.updateMany({
      where: {
        store_cart_id: store_cart_id,
        AND: {
          product_id: product_id
        }
      },
      data: {
        amount: amount,
        total: total,
        customer_id: customer_id
      }
    });

    return cart;

  }
}

export { UpdateCartService }
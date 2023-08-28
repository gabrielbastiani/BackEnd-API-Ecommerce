import prismaClient from "../../prisma";

interface CartRequest {
  store_cart_id: string;
  product_id: string;
  amount: number;
  total: number;
}

class UpdateCartService {
  async execute({
    store_cart_id,
    product_id,
    amount,
    total
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
        total: total
      }
    });

    return cart;

  }
}

export { UpdateCartService }
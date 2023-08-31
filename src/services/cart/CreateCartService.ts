import prismaClient from "../../prisma";

interface CartRequest {
  product_id: string;
  store_cart_id: string;
  amount: number;
  total: number;
}

class CreateCartService {
  async execute({
    product_id,
    store_cart_id,
    amount,
    total
  }: CartRequest) {
    const cart = await prismaClient.cart.create({
      data: {
        product_id: product_id,
        store_cart_id: store_cart_id,
        amount: amount,
        total: total
      }
    });

    return cart;

  }
}

export { CreateCartService }
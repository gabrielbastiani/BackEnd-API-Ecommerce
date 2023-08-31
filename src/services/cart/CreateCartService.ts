import prismaClient from "../../prisma";

interface CartRequest {
  product_id: string;
  store_cart_id: string;
  amount: number;
  total: number;
  customer_id: string;
}

class CreateCartService {
  async execute({
    product_id,
    store_cart_id,
    amount,
    total,
    customer_id
  }: CartRequest) {
    const cart = await prismaClient.cart.create({
      data: {
        product_id: product_id,
        store_cart_id: store_cart_id,
        amount: amount,
        total: total,
        customer_id: customer_id
      }
    });

    return cart;

  }
}

export { CreateCartService }
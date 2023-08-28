import prismaClient from "../../prisma";

interface CartRequest {
  product_id: string;
  store_cart_id: string;
  email_customer: string;
  amount: number;
  total: number;
}

class CreateCartService {
  async execute({
    product_id,
    store_cart_id,
    email_customer,
    amount,
    total
  }: CartRequest) {
    const cart = await prismaClient.cart.create({
      data: {
        product_id: product_id,
        store_cart_id: store_cart_id,
        email_customer: email_customer,
        amount: amount,
        total: total
      }
    });

    return cart;

  }
}

export { CreateCartService }
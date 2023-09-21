import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  total: number;
  customer_id: string;
  cep: string;
  new_subTotal: number;
  new_value_products: any;
  amount_products: number;
  days_delivery: string;
}

class CreateCartsTotalService {
  async execute({
    days_delivery,
    store_cart_id,
    total,
    customer_id,
    cep,
    new_subTotal,
    new_value_products,
    amount_products
  }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.create({
      data: {
        store_cart_id: store_cart_id,
        total: total,
        customer_id: customer_id,
        cep: cep,
        new_subTotal: new_subTotal,
        new_value_products: new_value_products,
        amount_products: amount_products,
        days_delivery: days_delivery
      }
    });

    return cart;

  }
}

export { CreateCartsTotalService }
import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  total: number;
  cep: string;
  frete: number;
  coupon: string;
  frete_coupon: number;
  new_subTotal: number;
  new_value_products: any;
  amount_products: number;
  days_delivery: string;
}

class UpdateCartsTotalService {
  async execute({
    store_cart_id,
    total,
    cep,
    frete,
    coupon,
    frete_coupon,
    new_subTotal,
    new_value_products,
    amount_products,
    days_delivery
  }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.updateMany({
      where: {
        store_cart_id: store_cart_id,
      },
      data: {
        total: total,
        cep: cep,
        frete: frete,
        coupon: coupon,
        frete_coupon: frete_coupon,
        new_subTotal: new_subTotal,
        new_value_products: new_value_products,
        amount_products: amount_products,
        days_delivery: days_delivery
      }
    });

    return cart;

  }
}

export { UpdateCartsTotalService }
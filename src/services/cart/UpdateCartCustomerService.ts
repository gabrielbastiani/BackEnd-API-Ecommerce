import prismaClient from "../../prisma";

interface CartRequest {
  store_cart_id: string;
  customer_id: string;
}

class UpdateCartCustomerService {
  async execute({
    store_cart_id,
    customer_id
  }: CartRequest) {
    const cart = await prismaClient.cart.updateMany({
      where: {
        store_cart_id: store_cart_id,
      },
      data: {
        customer_id: customer_id
      }
    });

    await prismaClient.cartTotal.updateMany({
      where: {
        store_cart_id: store_cart_id,
      },
      data: {
        customer_id: customer_id
      }
    });

    const getFinish = await prismaClient.cartTotalFinish.findMany({
      where: {
        store_cart_id: store_cart_id
      }
    });

    if (getFinish.length >= 1) {
      await prismaClient.cartTotalFinish.updateMany({
        where: {
          store_cart_id: store_cart_id,
        },
        data: {
          customer_id: customer_id
        }
      });
    }

    return cart;

  }
}

export { UpdateCartCustomerService }
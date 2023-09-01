import prismaClient from "../../prisma";

interface CartRequest {
  store_cart_id: string;
}

class ClearCartCustomerService {
  async execute({ store_cart_id }: CartRequest) {
    const cart = await prismaClient.cart.deleteMany({
      where: {
        store_cart_id: store_cart_id,
      }
    });

    await prismaClient.cartTotal.deleteMany({
      where: {
        store_cart_id: store_cart_id,
      }
    });

    const getFinish = await prismaClient.cartTotalFinish.findMany({
      where: {
        store_cart_id: store_cart_id
      }
    });

    if (getFinish.length >= 1) {
      await prismaClient.cartTotalFinish.deleteMany({
        where: {
          store_cart_id: store_cart_id,
        }
      });
    }

    return cart;

  }
}

export { ClearCartCustomerService }
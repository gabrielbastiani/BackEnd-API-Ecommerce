import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
}

class DeleteCartsTotalService {
  async execute({ store_cart_id }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.deleteMany({
      where: {
        store_cart_id: store_cart_id
      }
    });

    return cart;

  }
}

export { DeleteCartsTotalService }
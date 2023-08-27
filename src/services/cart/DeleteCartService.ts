import prismaClient from "../../prisma";

interface CartRequest {
  cart_id: string;
}

class DeleteCartService {
  async execute({ cart_id }: CartRequest) {
    const cart = await prismaClient.cart.delete({
      where: {
        id: cart_id
      }
    });

    return cart;

  }
}

export { DeleteCartService }
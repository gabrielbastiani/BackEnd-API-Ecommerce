import prismaClient from "../../prisma";

interface CartRequest {
  store_cart_id: string;
  product_id: string;
}

class DeleteCartService {
  async execute({ store_cart_id, product_id }: CartRequest) {
    const cart = await prismaClient.cart.deleteMany({
      where: {
        store_cart_id: store_cart_id,
        AND: {
          product_id: product_id
        }
      }
    });

    return cart;

  }
}

export { DeleteCartService }
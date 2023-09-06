import prismaClient from "../../../prisma";

interface CartTotalRequest {
  store_cart_id: string;
  total: number;
  cep: string;
}

class UpdateCartsTotalService {
  async execute({
    store_cart_id,
    total,
    cep
  }: CartTotalRequest) {
    const cart = await prismaClient.cartTotal.updateMany({
      where: {
        store_cart_id: store_cart_id,
      },
      data: {
        total: total,
        cep: cep
      }
    });

    return cart;

  }
}

export { UpdateCartsTotalService }
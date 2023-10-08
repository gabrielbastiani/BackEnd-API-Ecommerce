import prismaClient from "../../prisma";

class ClearAllCacheCartsService {
  async execute() {
    await prismaClient.cart.deleteMany();
    await prismaClient.cartTotal.deleteMany();
    await prismaClient.cartTotalFinish.deleteMany();
  }
}

export { ClearAllCacheCartsService }
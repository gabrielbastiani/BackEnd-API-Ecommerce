import prismaClient from "../../prisma";

class ClearAllCacheCartsService {
  async execute() {

    const store = await prismaClient.store.findFirst();

    await prismaClient.cart.deleteMany();
    await prismaClient.cartTotal.deleteMany();
    await prismaClient.cartTotalFinish.deleteMany();

    await prismaClient.notificationAdmin.create({
      data: {
        message: `Cache limpo com sucesso.`,
        store_id: store.id
      }
    });

  }
}

export { ClearAllCacheCartsService }
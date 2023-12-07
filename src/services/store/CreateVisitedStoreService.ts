import prismaClient from "../../prisma";

class CreateVisitedStoreService {
  async execute() {

    const store = await prismaClient.store.findFirst();

    const storeVisited = await prismaClient.visitedUser.create({
      data: {
        visited: +1,
        store_id: store.id
      }
    });

    return storeVisited;

  }
}

export { CreateVisitedStoreService }
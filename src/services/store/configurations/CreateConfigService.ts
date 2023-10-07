import prismaClient from "../../../prisma"; 

class CreateConfigService {
  async execute() {

    const store = await prismaClient.store.findFirst();

    await prismaClient.configStore.create({
      data: {
        store_id: store.id
      }
    });

  }
}

export { CreateConfigService }
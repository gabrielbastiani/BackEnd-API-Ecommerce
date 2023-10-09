import prismaClient from "../../../prisma"; 

class CreateCountDownTimeService {
  async execute() {

    const store = await prismaClient.store.findFirst();

    await prismaClient.countdownTimer.create({
      data: {
        store_id: store.id
      }
    });

  }
}

export { CreateCountDownTimeService }
import prismaClient from "../../../prisma"; 

class FindCountDownService {
  async execute() {
    const countDown = await prismaClient.countdownTimer.findFirst();
    return countDown;
  }
}

export { FindCountDownService }
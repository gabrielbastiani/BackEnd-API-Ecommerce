import prismaClient from "../../../prisma";

interface CountDownRequest {
  text_promotion: string;
  text_button: string;
  link_button: string;
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  second: string;
}

class UpdateCountDownTimeService {
  async execute({
    text_promotion,
    text_button,
    link_button,
    day,
    month,
    year,
    hour,
    minute,
    second
  }: CountDownRequest) {

    const countDown = await prismaClient.countdownTimer.findFirst();

    await prismaClient.countdownTimer.update({
      where: {
        id: countDown.id
      },
      data: {
        text_promotion: text_promotion,
        text_button: text_button,
        link_button: link_button,
        day: day,
        month: month,
        year: year,
        hour: hour,
        minute: minute,
        second: second
      }
    });
  }
}

export { UpdateCountDownTimeService }
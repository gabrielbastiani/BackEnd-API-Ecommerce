import prismaClient from '../../prisma';

interface UserRequest {
  admin_id: any;
  newslatter: string;
}

class UserUpdateNewslatterService {
  async execute({ admin_id, newslatter }: UserRequest) {
    const updateNews = await prismaClient.user.findUnique({
      where: {
        id: String(admin_id),
      },
      select: {
        newslatter: true,
      }
    })

    if (updateNews.newslatter === "Sim") {
      const newsSim = await prismaClient.user.update({
        where: {
          id: String(admin_id),
        },
        data: {
          newslatter: "Nao",
        }
      })
      return newsSim;
    }

    if (updateNews.newslatter === "Nao") {
      const newsNao = await prismaClient.user.update({
        where: {
          id: String(admin_id),
        },
        data: {
          newslatter: "Sim",
        }
      })
      return newsNao;
    }

  }
}

export { UserUpdateNewslatterService }
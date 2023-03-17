import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  newslatter: string;
}

class UserUpdateNewslatterService {
  async execute({ user_id, newslatter }: UserRequest) {
    const updateNews = await prismaClient.user.findUnique({
      where: {
        id: String(user_id),
      },
      select: {
        newslatter: true,
      }
    })

    if (updateNews.newslatter === "Sim") {
      const newsSim = await prismaClient.user.update({
        where: {
          id: String(user_id),
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
          id: String(user_id),
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
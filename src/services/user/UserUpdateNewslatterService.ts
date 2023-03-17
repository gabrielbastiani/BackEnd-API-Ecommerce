import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  newslatter: string;
}

class UserUpdateNewslatterService {
  async execute({ user_id, newslatter }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        newslatter: newslatter,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNewslatterService }
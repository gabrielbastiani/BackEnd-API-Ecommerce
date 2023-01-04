import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
}

class UserUpdateNewslatterService {
  async execute({ user_id }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        newslatter: false,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNewslatterService }
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  email: string;
}

class UserUpdateEmailService {
  async execute({ user_id, email }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        email: email,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateEmailService }
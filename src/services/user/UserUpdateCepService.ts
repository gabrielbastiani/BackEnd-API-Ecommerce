import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  CEP: string;
}

class UserUpdateCepService {
  async execute({ user_id, CEP }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        CEP: CEP,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateCepService }
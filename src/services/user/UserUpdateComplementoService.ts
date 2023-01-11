import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  complemento: string;
}

class UserUpdateComplementoService {
  async execute({ user_id, complemento }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        complemento: complemento,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateComplementoService }
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  bairro: string;
}

class UserUpdateBairroService {
  async execute({ user_id, bairro }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        bairro: bairro,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateBairroService }
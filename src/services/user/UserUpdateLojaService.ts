import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  loja_id: string;
}

class UserUpdateLojaService {
  async execute({ user_id, loja_id }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        loja_id: loja_id,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateLojaService }
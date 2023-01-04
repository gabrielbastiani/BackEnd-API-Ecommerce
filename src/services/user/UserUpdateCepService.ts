import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  cep: string;
}

class UserUpdateCepService {
  async execute({ user_id, cep }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        cep: cep,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateCepService }
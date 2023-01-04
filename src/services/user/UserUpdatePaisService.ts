import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  pais: string;
}

class UserUpdatePaisService {
  async execute({ user_id, pais }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        pais: pais,
      }
    })

    return userUpdated;
  }
}

export { UserUpdatePaisService }
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  numero: string;
}

class UserUpdateNumeroService {
  async execute({ user_id, numero }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        numero: numero,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNumeroService }
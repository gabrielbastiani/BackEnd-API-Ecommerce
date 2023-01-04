import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  state: string;
}

class UserUpdateEstadoService {
  async execute({ user_id, state }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        state: state,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateEstadoService }
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  estado: string;
}

class UserUpdateEstadoService {
  async execute({ user_id, estado }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        estado: estado,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateEstadoService }
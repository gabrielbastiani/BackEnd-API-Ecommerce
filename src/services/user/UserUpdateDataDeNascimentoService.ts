import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  dataNascimento: string;
}

class UserUpdateDataDeNascimentoService {
  async execute({ user_id, dataNascimento }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        dataNascimento: dataNascimento,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateDataDeNascimentoService }
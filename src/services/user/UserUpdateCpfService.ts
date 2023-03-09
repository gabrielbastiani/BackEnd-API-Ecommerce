import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  cpf: string;
}

class UserUpdateCpfService {
  async execute({ user_id, cpf }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        cpf: cpf,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateCpfService }
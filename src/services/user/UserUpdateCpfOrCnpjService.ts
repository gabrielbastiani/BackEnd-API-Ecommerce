import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  cpfOrCnpj: string;
}

class UserUpdateCpfOrCnpjService {
  async execute({ user_id, cpfOrCnpj }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        cpfOrCnpj: cpfOrCnpj,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateCpfOrCnpjService }
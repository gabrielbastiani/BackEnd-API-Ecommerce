import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  cnpj: string;
}

class UserUpdateCnpjService {
  async execute({ user_id, cnpj }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        cnpj: cnpj,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateCnpjService }
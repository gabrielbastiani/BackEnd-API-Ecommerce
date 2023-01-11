import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  rua: string;
}

class UserUpdateRuaService {
  async execute({ user_id, rua }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        rua: rua,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateRuaService }
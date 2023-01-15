import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  local: string;
}

class UserUpdateRuaService {
  async execute({ user_id, local }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        local: local,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateRuaService }
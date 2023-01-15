import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  cidade: string;
}

class UserUpdateCityService {
  async execute({ user_id, cidade }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        cidade: cidade,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateCityService }
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  city: string;
}

class UserUpdateCityService {
  async execute({ user_id, city }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        city: city,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateCityService }
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  phone: string;
}

class UserUpdatePhoneService {
  async execute({ user_id, phone }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        phone: phone,
      }
    })

    return userUpdated;
  }
}

export { UserUpdatePhoneService }
import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  address: string;
}

class UserUpdateAdressService {
  async execute({ user_id, address }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        address: address,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateAdressService }
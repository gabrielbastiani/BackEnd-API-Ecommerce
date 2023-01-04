import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  nameComplete: string;
}

class UserUpdateNameService {
  async execute({ user_id, nameComplete }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        nameComplete: nameComplete,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNameService }
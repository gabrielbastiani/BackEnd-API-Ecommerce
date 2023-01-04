import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  genero: string;
}

class UserUpdateGeneroService {
  async execute({ user_id, genero }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        genero: genero,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateGeneroService }
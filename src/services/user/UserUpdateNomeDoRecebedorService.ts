import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  nomeDoRecebedor: string;
}

class UserUpdateNomeDoRecebedorService {
  async execute({ user_id, nomeDoRecebedor }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        nomeDoRecebedor: nomeDoRecebedor,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateNomeDoRecebedorService }
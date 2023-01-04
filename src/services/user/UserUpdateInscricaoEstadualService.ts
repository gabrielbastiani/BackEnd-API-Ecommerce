import prismaClient from '../../prisma';

interface UserRequest {
  user_id: any;
  inscricaoEstadual: string;
}

class UserUpdateInscricaoEstadualService {
  async execute({ user_id, inscricaoEstadual }: UserRequest) {
    const userUpdated = await prismaClient.user.update({
      where: {
        id: String(user_id),
      },
      data: {
        inscricaoEstadual: inscricaoEstadual,
      }
    })

    return userUpdated;
  }
}

export { UserUpdateInscricaoEstadualService }
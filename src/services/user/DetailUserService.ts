import prismaClient from "../../prisma";

class DetailUserService {
  async execute(user_id: string) {

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      },
      select: {
        id: true,
        nameComplete: true,
        email: true,
        cpfOrCnpj: true,
        inscricaoEstadual: true,
        phone: true,
        dataNascimento: true,
        genero: true,
        newslatter: true,
        nomeDoRecebedor: true,
        address: true,
        cep: true,
        city: true,
        state: true,
        pais: true,
        role: true,
        authenticated: true,
        created_at: true,
        pedidos: true
      }
    })

    return user;
  }
}

export { DetailUserService }
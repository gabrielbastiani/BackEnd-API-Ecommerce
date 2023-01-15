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
        local: true,
        numero: true,
        bairro: true,
        complemento: true,
        CEP: true,
        cidade: true,
        estado: true,
        loja_id: true,
        authenticated: true,
        role: true,
        created_at: true,
      }
    })

    return user;
  }
}

export { DetailUserService }
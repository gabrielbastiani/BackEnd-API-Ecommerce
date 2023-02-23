import prismaClient from "../../prisma";

class DetailUserService {
  async execute(user_id: string) {

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      },
      include: {
        loja: true,
        pagamentos: true,
        pedidos: true
      }
    })

    return user;
  }
}

export { DetailUserService }
import prismaClient from "../../prisma";

class DetailUserService {
  async execute(admin_id: string) {

    const user = await prismaClient.user.findFirst({
      where: {
        id: admin_id
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
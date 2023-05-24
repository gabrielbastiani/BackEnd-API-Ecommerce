import prismaClient from "../../../prisma";
require('dotenv/config');

interface RecoveryRequest {
  email: string;
}

class RequestPasswordDashboardRecovery {
  async execute({ email }: RecoveryRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw {
        error: { field: "email", message: "Conta não encontrada." },
        code: 400,
      };
    }

    const recovery = await prismaClient.passwordRecovery.create({
      data: {
        email,
      },
    });

    return recovery;

  }
}

export { RequestPasswordDashboardRecovery };
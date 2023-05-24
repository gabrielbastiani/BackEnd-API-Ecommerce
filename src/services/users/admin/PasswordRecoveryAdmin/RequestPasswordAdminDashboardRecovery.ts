import prismaClient from "../../../../prisma";
require('dotenv/config');

interface RecoveryRequest {
  email: string;
}

class RequestPasswordAdminDashboardRecovery {
  async execute({ email }: RecoveryRequest) {
    const admin = await prismaClient.admin.findFirst({
      where: {
        email,
      }
    });

    if (!admin) {
      throw {
        error: { field: "email", message: "Conta não encontrada." },
        code: 400,
      };
    }

    const recovery = await prismaClient.passwordRecoveryAdmin.create({
      data: {
        email,
      }
    });

    return recovery;

  }
}

export { RequestPasswordAdminDashboardRecovery };
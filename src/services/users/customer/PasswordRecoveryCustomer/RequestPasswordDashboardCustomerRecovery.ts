import prismaClient from "../../../../prisma";
require('dotenv/config');

interface RecoveryRequest {
  email: string;
}

class RequestPasswordDashboardCustomerRecovery {
  async execute({ email }: RecoveryRequest) {
    const customer = await prismaClient.customer.findFirst({
      where: {
        email,
      },
    });

    if (!customer) {
      throw {
        error: { field: "email", message: "Conta não encontrada." },
        code: 400,
      };
    }

    const recovery = await prismaClient.passwordRecoveryCustomer.create({
      data: {
        email,
      },
    });

    return recovery;

  }
}

export { RequestPasswordDashboardCustomerRecovery };
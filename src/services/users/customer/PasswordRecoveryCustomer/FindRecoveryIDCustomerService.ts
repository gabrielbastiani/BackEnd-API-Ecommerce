import prismaClient from "../../../../prisma";

class FindRecoveryIDCustomerService {
  async execute() {
    const userRecovery = await prismaClient.passwordRecoveryCustomer.findFirst({
      select: {
        id: true,
        email: true
      }
    });

    return userRecovery;
  }
}

export { FindRecoveryIDCustomerService };
import prismaClient from "../../../../prisma";

class FindAdminRecoveryIDService {
  async execute() {
    const adminRecovery = await prismaClient.passwordRecoveryAdmin.findFirst({
      select: {
        id: true,
        email: true
      }
    });

    return adminRecovery;
  }
}

export { FindAdminRecoveryIDService }
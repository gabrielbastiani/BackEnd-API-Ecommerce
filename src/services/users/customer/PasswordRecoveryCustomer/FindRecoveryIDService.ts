import prismaClient from "../../../prisma";

class FindRecoveryIDService {
  async execute() {
    const userRecovery = await prismaClient.passwordRecovery.findFirst({
      select: {
        id: true,
        email: true
      }
    });

    return userRecovery;
  }
}

export { FindRecoveryIDService };
import prismaClient from "../../../prisma";

class DeletePasswordRecoveryIDService {
  async execute({ recovery_id }) {
    const deleteID = await prismaClient.passwordRecovery.delete({
      where: {
        id: String(recovery_id)
      },
    });

    return deleteID;
  }
}

export { DeletePasswordRecoveryIDService };
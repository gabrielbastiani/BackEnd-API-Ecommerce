import prismaClient from "../../../../prisma";

interface AdminRequest {
  passwordRecoveryAdmin_id: string;
}

class DeleteAdminPasswordRecoveryIDService {
  async execute({ passwordRecoveryAdmin_id }: AdminRequest) {
    const deleteID = await prismaClient.passwordRecoveryAdmin.delete({
      where: {
        id: passwordRecoveryAdmin_id
      },
    });

    return deleteID;
  }
}

export { DeleteAdminPasswordRecoveryIDService };
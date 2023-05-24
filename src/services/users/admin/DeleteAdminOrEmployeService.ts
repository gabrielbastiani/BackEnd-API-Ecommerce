import prismaClient from "../../../prisma";

interface AdminRequest {
  admin_id: string;
}

class DeleteAdminOrEmployeService {
  async execute({ admin_id }: AdminRequest) {
    const admin = await prismaClient.admin.delete({
      where: {
        id: admin_id
      }
    })

    return admin;
  }

}

export { DeleteAdminOrEmployeService }
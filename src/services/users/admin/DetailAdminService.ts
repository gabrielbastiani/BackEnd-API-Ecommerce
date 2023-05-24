import prismaClient from "../../../prisma";

interface AdminRequest {
  admin_id: string;
}

class DetailAdminService {
  async execute({ admin_id }: AdminRequest) {
    const admin = await prismaClient.admin.findFirst({
      where: {
        id: admin_id
      },
      include: {
        store: true
      }
    })

    return admin;
  }
}

export { DetailAdminService }
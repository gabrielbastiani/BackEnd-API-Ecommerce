import { RoleAdmin } from "@prisma/client";
import prismaClient from "../../../prisma";

interface AdminRequest {
  admin_id: string;
}

class AdminRoleService {
  async execute({ admin_id }: AdminRequest) {
    const admin = await prismaClient.admin.update({
      where: {
        id: admin_id
      },
      data: {
        role: RoleAdmin.EMPLOYEE
      },
    })

    return admin;

  }
}

export { AdminRoleService }
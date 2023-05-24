import { RoleAdmin } from '@prisma/client';
import prismaClient from '../../../prisma';

interface UserRequest {
  admin_id: string;
}

class AdminRoleEmployeeService {
  async execute({ admin_id }: UserRequest) {
    const admin = await prismaClient.admin.update({
      where: {
        id: admin_id
      },
      data: {
        role: RoleAdmin.ADMIN
      },
    })

    return admin;

  }
}

export { AdminRoleEmployeeService }
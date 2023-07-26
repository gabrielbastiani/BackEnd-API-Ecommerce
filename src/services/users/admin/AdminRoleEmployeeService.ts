import { RoleAdmin } from '@prisma/client';
import prismaClient from '../../../prisma';

interface UserRequest {
  admin_id: string;
}

class AdminRoleEmployeeService {
  async execute({ admin_id }: UserRequest) {

    const roleManage = await prismaClient.admin.findUnique({
      where: {
        id: admin_id
      },
      select: {
        role: true
      }
    })

    const role = await prismaClient.admin.findUnique({
      where: {
        id: admin_id
      },
      select: {
        role: true
      }
    })

    if (roleManage.role === "ADMIN") {
      const isEmployee = await prismaClient.admin.update({
        where: {
          id: admin_id
        },
        data: {
          role: RoleAdmin.EMPLOYEE
        }
      })

      return isEmployee;
    }

    if (role.role === "EMPLOYEE") {
      const isAdmin = await prismaClient.admin.update({
        where: {
          id: admin_id
        },
        data: {
          role: RoleAdmin.ADMIN
        }
      })

      return isAdmin;

    }

  }
}

export { AdminRoleEmployeeService }
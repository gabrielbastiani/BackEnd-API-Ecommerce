import { Role } from '@prisma/client';
import prismaClient from "../../prisma";

interface UserRequest {
  admin_id: string;
}

class AdminRoleUserService {
  async execute({ admin_id }: UserRequest) {
    const user = await prismaClient.user.update({
      where: {
        id: admin_id
      },
      data: {
        role: Role.ADMIN
      },
    })

    return user;

  }
}

export { AdminRoleUserService }
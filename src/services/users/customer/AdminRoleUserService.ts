import { Role } from '@prisma/client';
import prismaClient from "../../prisma";

interface UserRequest {
  user_id: string;
}

class AdminRoleUserService {
  async execute({ user_id }: UserRequest) {
    const user = await prismaClient.user.update({
      where: {
        id: user_id
      },
      data: {
        role: Role.ADMIN
      },
    })

    return user;

  }
}

export { AdminRoleUserService }
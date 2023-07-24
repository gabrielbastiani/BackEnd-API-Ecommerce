import { RoleAdmin } from '@prisma/client';
import prismaClient from '../../../prisma';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface AuthRequest {
  email: string;
  password: string;
}

class AuthAdminService {
  async execute({ email, password }: AuthRequest) {
    const admin = await prismaClient.admin.findFirst({
      where: {
        email: email,
        authenticated: true
      }
    });

    if (!admin) {
      throw new Error("Admin/password incorrect")
    }

    const passwordMatch = await compare(password, admin.password)

    if (!passwordMatch) {
      throw new Error("Admin/password incorrect")
    }

    const token = sign(
      {
        name: admin.name,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        subject: admin.id,
        expiresIn: '30d'
      }
    );

    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      token: token,
    }

  }

}

export { AuthAdminService };
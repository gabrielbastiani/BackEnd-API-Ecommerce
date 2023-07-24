import { RoleAdmin } from '@prisma/client';
import prismaClient from '../../../prisma';
import { hash } from 'bcryptjs';
require('dotenv/config');

interface AdminRequest {
  name: string;
  slug: string;
  email: string;
  password: string;
  store_id: string;
}

class AdminCreateService {
  async execute({ name, email, password, store_id }: AdminRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    if (!email) {
      throw new Error("Email incorrect");
    }

    const adminAlreadyExists = await prismaClient.admin.findFirst({
      where: {
        email: email,
      }
    });

    if (adminAlreadyExists) {
      throw new Error("Admin already exists");
    }

    const passwordHash = await hash(password, 8);

    const superAdmin = await prismaClient.admin.create({
      data: {
        name: name,
        slug: removerAcentos(name),
        email: email,
        password: passwordHash,
        role: RoleAdmin.ADMIN,
        authenticated: true,
        store_id: store_id,
      },
      include: {
        store: true,
      }
    });

    return superAdmin;

  }

}

export { AdminCreateService }
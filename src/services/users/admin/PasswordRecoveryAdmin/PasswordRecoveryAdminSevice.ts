import prismaClient from '../../../../prisma';
import { hash } from 'bcryptjs'

interface AdminRequest {
  passwordRecoveryAdmin_id: string;
  password: string;
}

class PasswordRecoveryAdminSevice {
  async execute({ passwordRecoveryAdmin_id, password }: AdminRequest) {
    const recovery = await prismaClient.passwordRecoveryAdmin.findUnique({
      where: {
        id: passwordRecoveryAdmin_id
      },
    });

    if (!recovery) {
      throw {
        error: { message: "Conta não encontrada." },
        code: 400,
      };
    }

    const hashedPassword = await hash(password, 8);

    await prismaClient.admin.update({
      where: {
        email: recovery.email,
      },
      data: {
        password: hashedPassword,
      },
    });

    await prismaClient.passwordRecoveryAdmin.delete({
      where: {
        id: recovery.id,
      },
    });

    return {
      message: "Senha atualizada com sucesso",
    };
  }
}

export { PasswordRecoveryAdminSevice };
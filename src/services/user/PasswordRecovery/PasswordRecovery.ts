import prismaClient from "../../../prisma";
import { hash } from 'bcryptjs'

interface RecoveryRequest {
  recovery_id: string;
  password: string;
}

class PasswordRecovery {
  async execute({ recovery_id, password }: RecoveryRequest) {
    const recovery = await prismaClient.passwordRecovery.findUnique({
      where: {
        id: recovery_id
      },
    });

    if (!recovery) {
      throw {
        error: { message: "Conta não encontrada." },
        code: 400,
      };
    }

    const hashedPassword = await hash(password, 8);

    await prismaClient.user.update({
      where: {
        email: recovery.email,
      },
      data: {
        password: hashedPassword,
      },
    });

    await prismaClient.passwordRecovery.delete({
      where: {
        id: recovery.id,
      },
    });

    return {
      message: "Senha atualizada com sucesso",
    };
  }
}

export { PasswordRecovery };
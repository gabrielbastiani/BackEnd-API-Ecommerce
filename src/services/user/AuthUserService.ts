import { Role } from '@prisma/client';
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //Verificar se o email existe, e se o usuario confirmou a autenticação no email dele.
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
        authenticated: true,
        role: Role.CUSTOMER
      }
    })

    if (!user) {
      throw new Error("User/password incorrect")
    }

    // preciso verificar se a senha que ele mandou está correta.
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("User/password incorrect")
    }

    // Se deu tudo certo vamos gerar o token pro usuario.
    const token = sign(
      {
        name: user.nameComplete,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.nameComplete,
      email: user.email,
      role: user.role,
      token: token,
    }

  }

}

export { AuthUserService };
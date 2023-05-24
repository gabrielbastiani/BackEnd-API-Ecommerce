import prismaClient from '../../../prisma'; 
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface AuthRequest {
  email: string;
  password: string;
}

class AuthCustomerService {
  async execute({ email, password }: AuthRequest) {
    const customer = await prismaClient.customer.findFirst({
      where: {
        email: email,
        authenticated: true,
      }
    })

    if (!customer) {
      throw new Error("User/password incorrect")
    }

    const passwordMatch = await compare(password, customer.password)

    if (!passwordMatch) {
      throw new Error("User/password incorrect")
    }

    const token = sign(
      {
        name: customer.name,
        email: customer.email,
      },
      process.env.JWT_SECRET,
      {
        subject: customer.id,
        expiresIn: '30d'
      }
    )

    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      token: token,
    }

  }

}

export { AuthCustomerService };
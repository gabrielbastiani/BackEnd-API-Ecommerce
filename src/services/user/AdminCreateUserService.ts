import { Role } from '@prisma/client';
import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'
import nodemailer from "nodemailer";
require('dotenv/config');


interface UserRequest {
  nameComplete: string;
  slug: string;
  email: string;
  password: string;
  loja_id: string;
}

class AdminCreateUserService {
  async execute({ nameComplete, slug, email, password, loja_id }: UserRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/ +/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/[/]/g, "-");
  }

    // verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        nameComplete: nameComplete,
        slug: removerAcentos(nameComplete),
        email: email,
        password: passwordHash,
        role: Role.ADMIN,
        loja_id: loja_id,
      },
      include: {
        loja: true,
        pagamentos: true,
        pedidos: true,
      }
    })

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    })

    await transporter.sendMail({
      from: "contato@builderseunegocioonline.com.br",
      to: "gabriel.bastiani@hotmail.com.br",
      subject: "Confirme cadastro de Administração na Loja Virtual",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Confirme cadastro!</h2>
            </div>
            
            <article>
                <p>Olá!</p>
                <p>O usuario, ${user.nameComplete} está se cadastrando como administrador na loja virtual!</p>
                <p><a href="http://localhost:3000/authenticated/${user.id}">CLIQUE AQUI</a>, para confirmar a conta junto a Loja Virtual desse novo usuario.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual Builder Seu Negocio Online</h5>
            </div>`,
    });

    return user;
  }
}

export { AdminCreateUserService }
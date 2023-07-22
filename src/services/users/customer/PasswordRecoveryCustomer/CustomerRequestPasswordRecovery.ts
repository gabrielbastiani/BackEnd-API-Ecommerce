import prismaClient from "../../../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');


interface RecoveryRequest {
  email: string;
}

class CustomerRequestPasswordRecovery {
  async execute({ email }: RecoveryRequest) {
    const customer = await prismaClient.customer.findFirst({
      where: {
        email,
      },
    });

    if (!customer) {
      throw {
        error: { field: "email", message: "Conta não encontrada." },
        code: 400,
      };
    }

    const recovery = await prismaClient.passwordRecoveryCustomer.create({
      data: {
        email,
      },
    });

    const store = await prismaClient.store.findFirst();

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    });

    await transporter.sendMail({
      from: `Loja Virtual - ${store.name} <${store.email}>`,
      to: `${customer.email}`,
      subject: "Recuperação de senha",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Recupere sua senha!</h2>
            </div>
            
            <article>
                <p>Olá, ${customer.name}!</p>
                <p>Voce esqueceu a sua senha?</p>
                <p><a href="http://localhost:3000/recover/${recovery.id}">CLIQUE AQUI</a>, para crair uma nova senha de acesso.</p>
                <p>Você será redirecionado a uma página em nossa Loja virtual onde poderá cadastrar uma nova senha com segurança!</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja virtual ${store.name}</h5>
            </div>`,
    });

    return {
      message: "Verifique seu E-mail",
    };
  }
}

export { CustomerRequestPasswordRecovery };
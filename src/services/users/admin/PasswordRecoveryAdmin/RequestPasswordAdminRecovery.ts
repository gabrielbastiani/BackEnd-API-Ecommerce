import prismaClient from "../../../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');


interface RecoveryRequest {
  email: string;
}

class RequestPasswordAdminRecovery {
  async execute({ email }: RecoveryRequest) {
    const admin = await prismaClient.admin.findFirst({
      where: {
        email,
      },
    });

    if (!admin) {
      throw {
        error: { field: "email", message: "Conta não encontrada." },
        code: 400,
      };
    }

    const recovery = await prismaClient.passwordRecoveryAdmin.create({
      data: {
        email,
      },
    });

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    })

    if(admin.role === "EMPLOYEE") {
      await transporter.sendMail({
        from: 'Loja virtual Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>',
        to: admin.email,
        subject: "Recuperação de senha",
        html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                  <h2>Recupere sua senha!</h2>
              </div>
              
              <article>
                  <p>Olá, ${admin.name}!</p>
                  <p>Voce esqueceu a sua senha?</p>
                  <p><a href="http://localhost:3001/recoverAdmin/${recovery.id}">CLIQUE AQUI</a>, para crair uma nova senha de acesso.</p>
                  <p>Você será redirecionado a uma página em nossa Loja virtual onde poderá cadastrar uma nova senha com segurança!</p>
              </article>
              
              <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                  <h5>Loja virtual Builder Seu Negocio Online</h5>
              </div>`,
      });

      return;

    }

    await transporter.sendMail({
      from: 'Loja virtual Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>',
      to: admin.email,
      subject: "Recuperação de senha",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Recupere sua senha!</h2>
            </div>
            
            <article>
                <p>Olá, ${admin.name}!</p>
                <p>Voce esqueceu a sua senha?</p>
                <p><a href="http://localhost:3000/recover/${recovery.id}">CLIQUE AQUI</a>, para crair uma nova senha de acesso.</p>
                <p>Você será redirecionado a uma página em nossa Loja virtual onde poderá cadastrar uma nova senha com segurança!</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja virtual Builder Seu Negocio Online</h5>
            </div>`,
    });


    return {
      message: "Verifique seu E-mail",
    };
  }
}

export { RequestPasswordAdminRecovery };
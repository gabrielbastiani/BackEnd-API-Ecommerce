import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');


interface ContatoRequest {
  name: string;
  email: string;
  phone: string;
  empresa: string;
  setor: string;
  mensagem: string;
  store_id: string;
}

class CreateContatoService {
  async execute({ name, email, phone, empresa, setor, mensagem, store_id }: ContatoRequest){
    const contato = await prismaClient.contato.create({
      data:{
        name: name,
        email: email,
        phone: phone,
        empresa: empresa,
        setor: setor,
        mensagem: mensagem,
        store_id: store_id
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
      from: "Loja Virtual - Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>",
      to: `${email}`,
      subject: "Recebemos seu contato",
      html: `
            <article>
                <p>Olá ${name}!</p>
                <p>Agradecenos por entrar em contato conosco, fique tranquilo(a), em breve retornaremos contato por aqui, ou pelo telefone que nos deixou.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual Builder Seu Negocio Online</h5>
            </div>`,
    });

    return contato;

  }
}

export { CreateContatoService }
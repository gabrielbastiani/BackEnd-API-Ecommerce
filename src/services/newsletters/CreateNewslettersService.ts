import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');


interface NewsRequest {
  name: string;
  email: string;
  store_id: string;
}

class CreateNewslettersService {
  async execute({ name, email, store_id }: NewsRequest){
    const newsletter = await prismaClient.newsletter.create({
      data:{
        name: name,
        email: email,
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
      subject: "Em breve novidades da nossa store virtual para você",
      html: `
            <article>
                <p>Olá ${name}!</p>
                <p>Agradecemos pelo seu cadastro em nossa newsletters da store virtual Builder Seu Negócio Online, em breve novidades por aqui aguarde!!!.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual Builder Seu Negocio Online</h5>
            </div>`,
    });

    return newsletter;

  }
}

export { CreateNewslettersService }
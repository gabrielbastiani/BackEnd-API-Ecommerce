import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  message: string;
  store_id: string;
}

class CreateContactService {
  async execute({ name, email, phone, company, sector, message, store_id }: ContactRequest){
    const contact = await prismaClient.contact.create({
      data:{
        name: name,
        email: email,
        phone: phone,
        company: company,
        sector: sector,
        message: message,
        store_id: store_id
      }
    });

    const store = await prismaClient.store.findFirst();

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    })

    await transporter.sendMail({
      from: `Loja Virtual - ${store.name} <${store.email}>`,
      to: `${email}`,
      subject: "Recebemos seu contato",
      html: `
            <article>
                <p>Olá ${name}!</p>
                <p>Agradecenos por entrar em contato conosco, fique tranquilo(a), em breve retornaremos contato por aqui, ou pelo telefone que nos deixou.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual ${store.name}</h5>
            </div>`,
    });

    return contact;

  }
}

export { CreateContactService }
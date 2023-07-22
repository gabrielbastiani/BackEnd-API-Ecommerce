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
}

class CreateContactService {
  async execute({ name, email, phone, company, sector, message }: ContactRequest){

    const store = await prismaClient.store.findFirst();

    const contact = await prismaClient.contact.create({
      data:{
        name: name,
        email: email,
        phone: phone,
        company: company,
        sector: sector,
        message: message,
        store_id: store.id
      }
    });

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
                <p>Agradecenos por entrar em contato conosco, fique tranquilo(a), em breve retornaremos contato por aqui, ou pelo numero de telefone que nos deixou.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual ${store.name}</h5>
            </div>`,
    });

    await transporter.sendMail({
      from: `<${email}>`,
      to: `${store.email}`,
      subject: `Formulario de contato da loja virtual ${store.name}`,
      html: `
            <article>
                <p>O cliente ${name}, deixou a seguinte mensagem abaixo, no formulario de contato da loja virtual ${store.name}.</p>
                <p>Responda a mensagem do(a) ${name} respondendo a este email.</p>
                <p>Ou vá até o painel administrativo da loja virtual e responda a qualquer momento por lá mesmo...</p>
                <h3>Dados do Cliente:</h3>
                <p><strong>Nome: </strong><span>${name}</span></p>
                <p><strong>E-mail: </strong><span>${email}</span></p>
                <p><strong>Telefone: </strong><span>${phone}</span></p>
                ${company === null ? ( `<p><strong>Empresa: </strong><span>Clinte deixou em branco</span></p>` ) : `<p><strong>Empresa: </strong><span>${company}</span></p>` }
                ${sector === null ? ( `<p><strong>Setor: </strong><span>Clinte deixou em branco</span></p>` ) : `<p><strong>Setor: </strong><span>${sector}</span></p>` }
                <h4>VEJA A MENSAGEM DEIXADA PELO CLIENTE ABAIXO:</h4>
                <p>${message}</p>
                <br/>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual ${store.name}</h5>
            </div>`,
    });

    return contact;

  }
}

export { CreateContactService }
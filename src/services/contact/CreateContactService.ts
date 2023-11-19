import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  message: string;
}

class CreateContactService {
  async execute({ name, email, phone, company, sector, message }: ContactRequest) {

    const store = await prismaClient.store.findFirst();

    const contact = await prismaClient.contact.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        company: company,
        sector: sector,
        message: message,
        store_id: store.id
      }
    });

    const contact_find = await prismaClient.contact.findFirst({
      orderBy: {
        created_at: 'desc'
      }
    });

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    });

    const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/contato_criado.ejs`);

    const data = await ejs.renderFile(requiredPath, {
      name: name,
      store_address: store.address,
      store_cellPhone: store.cellPhone,
      store_cep: store.cep,
      store_city: store.city,
      store_cnpj: store.cnpj,
      store_name: store.name,
      store_logo: store.logo
    });

    await transporter.sendMail({
      from: `Loja Virtual - ${store.name} <${store.email}>`,
      to: `${email}`,
      subject: "Recebemos seu contato",
      html: data
    });

    const requiredPathResponde = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/contato_criado_notificacao.ejs`);

    const data_responde = await ejs.renderFile(requiredPathResponde, {
      name: name,
      email: email,
      phone: phone,
      company: company,
      sector: sector,
      message: message,
      store_address: store.address,
      store_cellPhone: store.cellPhone,
      store_cep: store.cep,
      store_city: store.city,
      store_cnpj: store.cnpj,
      store_name: store.name,
      store_logo: store.logo
    });

    await transporter.sendMail({
      from: `<${email}>`,
      to: `${store.email}`,
      subject: `Formulario de contato da loja virtual ${store.name}`,
      html: data_responde
    });

    await prismaClient.notificationAdmin.create({
      data: {
        message: `Você recebeu uma nova mensagem.`,
        link: `http://localhost:3000/contato/${contact_find.id}`,
        store_id: store.id
      }
    });

    return contact;

  }
}

export { CreateContactService }
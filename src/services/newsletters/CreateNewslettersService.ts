import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";


interface NewsRequest {
  name: string;
  email: string;
  store_id: string;
}

class CreateNewslettersService {
  async execute({ name, email, store_id }: NewsRequest) {
    const newsletter = await prismaClient.newsletter.create({
      data: {
        name: name,
        email: email,
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
    });

    const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/newslatter_cadastrado.ejs`);

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
      subject: data
    });

    await prismaClient.notificationAdmin.create({
      data: {
        user: "EMPLOYEE",
        message: `Novo cadastro na <strong>newsletters</strong> foi realizado na loja.`,
        link: `http://localhost:3000/newsletters`,
        store_id: store.id
      }
    });

    return newsletter;

  }
}

export { CreateNewslettersService }
import prismaClient from "../../../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface RecoveryRequest {
  email: string;
}

class RequestPasswordCustomerRecovery {
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

    const requiredPath = path.join(__dirname, `../../../store/configurations/emailsTransacionais/emails_transacionais/recuperar_senha_do_usuario.ejs`);

    const data = await ejs.renderFile(requiredPath, {
      name: customer.name,
      id: recovery.id,
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
      to: `${customer.email}`,
      subject: "Recuperação de senha",
      html: data
    });


    return {
      message: "Verifique seu E-mail",
    };
  }
}

export { RequestPasswordCustomerRecovery };
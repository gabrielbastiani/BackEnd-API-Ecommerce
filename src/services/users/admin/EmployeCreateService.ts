import { RoleAdmin } from '@prisma/client';
import prismaClient from '../../../prisma';
import { hash } from 'bcryptjs';
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface AdminRequest {
  name: string;
  slug: string;
  email: string;
  password: string;
}

class EmployeCreateService {
  async execute({ name, email, password }: AdminRequest) {

    const store = await prismaClient.store.findFirst();

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    if (!email) {
      throw new Error("Email incorrect");
    }

    const adminAlreadyExists = await prismaClient.admin.findFirst({
      where: {
        email: email,
      }
    });

    if (adminAlreadyExists) {
      throw new Error("Admin already exists");
    }

    const passwordHash = await hash(password, 8);

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    });

    const employe = await prismaClient.admin.create({
      data: {
        name: name,
        slug: removerAcentos(name),
        email: email,
        password: passwordHash,
        role: RoleAdmin.EMPLOYEE,
        store_id: store.id
      }
    });

    const requiredPath = path.join(__dirname, `../../store/configurations/emailsTransacionais/emails_transacionais/criacao_usuario_empregado.ejs`);

    const data = await ejs.renderFile(requiredPath, {
      name: employe.name,
      id: employe.id,
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
      to: `${store.email}`,
      subject: "Confirme cadastro de Administração na Loja Virtual",
      html: data
    });

    return employe;

  }

}

export { EmployeCreateService }
import { RoleAdmin } from '@prisma/client';
import prismaClient from '../../../prisma';
import { hash } from 'bcryptjs';
import nodemailer from "nodemailer";
require('dotenv/config');

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

    await transporter.sendMail({
      from: `Loja Virtual - ${store.name} <${store.email}>`,
      to: `${store.email}`,
      subject: "Confirme cadastro de Administração na Loja Virtual",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h2>Confirme cadastro!</h2>
                  </div>
                  
                  <article>
                      <p>Olá!</p>
                      <p>O usuario, ${employe.name} está se cadastrando como administrador na loja virtual!</p>
                      <p><a href="http://localhost:3000/authenticated/${employe.id}">CLIQUE AQUI</a>, para confirmar a conta junto a Loja Virtual desse novo usuario.</p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Loja Virtual ${store.name}</h5>
                  </div>`,
    });

    return employe;

  }

}

export { EmployeCreateService }
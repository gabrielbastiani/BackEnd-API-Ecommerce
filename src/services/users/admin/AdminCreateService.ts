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
  store_id: string;
}

class AdminCreateService {
  async execute({ name, email, password, store_id }: AdminRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/ +/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/[/]/g, "-");
    }

    if (!email) {
      throw new Error("Email incorrect")
    }

    const adminAlreadyExists = await prismaClient.admin.findFirst({
      where: {
        email: email,
      }
    })

    if (adminAlreadyExists) {
      throw new Error("Admin already exists");
    }

    const passwordHash = await hash(password, 8);

    const admin = await prismaClient.admin.create({
      data: {
        name: name,
        slug: removerAcentos(name),
        email: email,
        password: passwordHash,
        role: RoleAdmin.ADMIN,
        store_id: store_id,
      },
      include: {
        store: true,
      }
    })

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    });

    await transporter.sendMail({
      from: "contato@builderseunegocioonline.com.br",
      to: "gabriel.bastiani@hotmail.com.br",
      subject: "Confirme cadastro de Administração na Loja Virtual",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Confirme cadastro!</h2>
            </div>
            
            <article>
                <p>Olá!</p>
                <p>O usuario, ${admin.name} está se cadastrando como administrador na loja virtual!</p>
                <p><a href="http://localhost:3000/authenticated/${admin.id}">CLIQUE AQUI</a>, para confirmar a conta junto a Loja Virtual desse novo usuario.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual Builder Seu Negocio Online</h5>
            </div>`,
    });

    return admin;
  }
}

export { AdminCreateService }
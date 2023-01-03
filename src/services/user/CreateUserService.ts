import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'
import nodemailer from "nodemailer";
require('dotenv/config');


interface UserRequest {
  nameComplete: string;
  email: string;
  password: string;
  cpfOrCnpj: string;
  inscricaoEstadual: string;
  phone: string;
  dataNascimento: string;
  genero: string;
  nomeDoRecebedor: string;
  address: string;
  cep: string;
  pais: string;
  state: string;
  city: string;
}

class CreateUserService {
  async execute({
    nameComplete,
    email,
    password,
    cpfOrCnpj,
    inscricaoEstadual,
    phone,
    dataNascimento,
    genero,
    nomeDoRecebedor,
    address,
    cep,
    city,
    state,
    pais
  }: UserRequest) {

    // verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        nameComplete: nameComplete,
        email: email,
        password: passwordHash,
        cpfOrCnpj: cpfOrCnpj,
        inscricaoEstadual: inscricaoEstadual,
        phone: phone,
        dataNascimento: dataNascimento,
        genero: genero,
        nomeDoRecebedor: nomeDoRecebedor,
        address: address,
        cep: cep,
        city: city,
        state: state,
        pais: pais
      },
      select: {
        id: true,
        nameComplete: true,
        email: true,
        cpfOrCnpj: true,
        inscricaoEstadual: true,
        phone: true,
        dataNascimento: true,
        genero: true,
        newslatter: true,
        nomeDoRecebedor: true,
        address: true,
        cep: true,
        city: true,
        state: true,
        pais: true,
        authenticated: true,
        role: true,
        created_at: true,
        pedidos: true
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
      to: user.email,
      subject: "Confirme seu cadastro de usuario na loja virtual da Builder Seu Negócio Online",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Confirme seu cadastro!</h2>
            </div>
            
            <article>
                <p>Olá, ${user.nameComplete}!</p>
                <p><a href="http://localhost:3000/userAuthenticatedPostagens?user_id=${user.id}">CLIQUE AQUI</a>, para confirmar sua conta junto a loja virtual Builder Seu Negócio Online, e poder acessa-la com os dados que cadastrou anteriormente.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual Builder Seu Negocio Online</h5>
            </div>`,
    });

    await transporter.sendMail({
      from: "Loja Virtual - Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>",
      to: "gabriel.bastiani@hotmail.com.br",
      subject: "Novo cliente se cadastrando na loja virtual da Builder Seu Negócio Online",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Novo usúario!</h2>
            </div>
            
            <article>
                <p>Olá!</p>
                <p>Um cliente de nome <b>${user.nameComplete}</b> se cadastrou na Loja Virtual.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual Builder Seu Negocio Online</h5>
            </div>`,
    });

    return user;
  }
}

export { CreateUserService }
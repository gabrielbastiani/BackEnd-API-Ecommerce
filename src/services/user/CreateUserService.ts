import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'
import nodemailer from "nodemailer";
require('dotenv/config');


interface UserRequest {
  nameComplete: string;
  slug: string;
  email: string;
  password: string;
  cpf: string;
  cnpj: string;
  inscricaoEstadual: string;
  phone: string;
  dataNascimento: string;
  genero: string;
  newslatter: string;
  local: string;
  numero: string;
  complemento: string;
  bairro: string;
  CEP: string;
  cidade: string;
  estado: string;
  loja_id: string;
  authenticated: boolean;
}

class CreateUserService {
  async execute({
    nameComplete,
    slug,
    email,
    password,
    cpf,
    cnpj,
    inscricaoEstadual,
    phone,
    dataNascimento,
    genero,
    newslatter,
    local,
    numero,
    complemento,
    bairro,
    CEP,
    cidade,
    estado,
    loja_id,
  }: UserRequest) {

    function removerAcentos(s: any) {
      return s.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/ +/g, "-")
          .replace(/-{2,}/g, "-")
          .replace(/[/]/g, "-");
  }

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
        slug: removerAcentos(nameComplete),
        email: email,
        password: passwordHash,
        cpf: cpf,
        cnpj: cnpj,
        inscricaoEstadual: inscricaoEstadual,
        phone: phone,
        dataNascimento: dataNascimento,
        genero: genero,
        newslatter: newslatter,
        local: local,
        numero: numero,
        bairro: bairro,
        complemento: complemento,
        CEP: CEP,
        cidade: cidade,
        estado: estado,
        loja_id: loja_id,
        authenticated: true
      },
      include: {
        loja: true,
        pagamentos: true,
        pedidos: true,
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
import prismaClient from '../../../prisma';
import { hash } from 'bcryptjs';
import nodemailer from "nodemailer";
require('dotenv/config');

interface CustomerRequest {
  name: string;
  slug: string;
  email: string;
  password: string;
  cpf: string;
  cnpj: string;
  stateRegistration: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  newslatter: string;
  addressee: string;
  address: string;
  number: string;
  complement: string;
  reference: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
  store_id: string;
}

class CreateCustomerService {
  async execute({
    name,
    email,
    password,
    cpf,
    cnpj,
    stateRegistration,
    phone,
    dateOfBirth,
    gender,
    newslatter,
    addressee,
    address,
    number,
    complement,
    reference,
    neighborhood,
    cep,
    city,
    state,
    store_id
  }: CustomerRequest) {

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

    const customerAlreadyExists = await prismaClient.customer.findFirst({
      where: {
        email: email,
      }
    })

    if (customerAlreadyExists) {
      throw new Error("Já existe um cliente com esse e-mail!")
    }

    const passwordHash = await hash(password, 8);

    const customer = await prismaClient.customer.create({
      data: {
        name: name,
        slug: removerAcentos(name),
        email: email,
        password: passwordHash,
        cpf: cpf,
        cnpj: cnpj,
        stateRegistration: stateRegistration,
        phone: phone,
        dateOfBirth: dateOfBirth,
        gender: gender,
        newslatter: newslatter,
        addressee: addressee,
        address: address,
        number: number,
        complement: complement,
        reference: reference,
        neighborhood: neighborhood,
        cep: cep,
        city: city,
        state: state,
        store_id: store_id
      }
    });

    const store = await prismaClient.store.findFirst();

    const findCustomer = await prismaClient.customer.findFirst({
      orderBy: {
        created_at: 'desc'
      }
    });

    await prismaClient.deliveryAddressCustomer.create({
      data: {
        customer_id: findCustomer.id,
        addressee: findCustomer.addressee,
        address: findCustomer.address,
        number: findCustomer.number,
        complement: findCustomer.complement,
        reference: findCustomer.reference,
        neighborhood: findCustomer.neighborhood,
        cep: findCustomer.cep,
        city: findCustomer.city,
        state: findCustomer.state,
        phone: findCustomer.phone,
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
      to: store.email,
      subject: "Novo cliente se cadastrando na store virtual da Builder Seu Negócio Online",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Novo usúario!</h2>
            </div>
            
            <article>
                <p>Olá!</p>
                <p>Um cliente de nome <b>${customer.name}</b> se cadastrou na Loja Virtual.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual ${store.name}</h5>
            </div>`,
    });

    return customer;
  }
}

export { CreateCustomerService }
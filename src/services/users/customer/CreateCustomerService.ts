import prismaClient from '../../../prisma';
import { hash } from 'bcryptjs';
import nodemailer from "nodemailer";
require('dotenv/config');
import axios from 'axios';
import ejs from 'ejs';
import path from "path";

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
        store_id: store.id,
        deliverySelected: "Sim"
      }
    });

    const options = {
      method: 'POST',
      url: process.env.API_ASSAS_CREATE_CLIENT,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        access_token: process.env.TOKEN_ASSAS
      },
      data: {
        company: cnpj ? name : null,
        stateInscription: cnpj ? stateRegistration : null,
        name: name,
        email: email,
        phone: removerAcentos(phone),
        mobilePhone: removerAcentos(phone),
        cpfCnpj: removerAcentos(cpf || cnpj),
        postalCode: cep,
        address: address,
        addressNumber: number,
        complement: complement,
        province: neighborhood,
        externalReference: store.name,
        notificationDisabled: true
      }
    };

    axios
      .request(options)
      .then(async function (response: { data: any; }) {

        await prismaClient.customer.update({
          where: {
            id: findCustomer.id
          },
          data: {
            id_customer_assas: response.data.id
          }
        });

      })
      .catch(function (error: any) {
        console.error(error);
      });

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    });

    const requiredPath = path.join(__dirname, `../../store/configurations/emailsTransacionais/emails_transacionais/criacao_de_cliente.ejs`);

    const data = await ejs.renderFile(requiredPath, {
      name: customer.name,
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
      to: store.email,
      subject: `Novo cliente se cadastrando na loja virtual da ${store.name}`,
      html: data
    });

    return customer;

  }
}

export { CreateCustomerService }
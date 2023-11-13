import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface ProposalRequest {
  currentPrice: number;
  counterOfferPrice: number;
  name: string;
  email: string;
  phone: string;
  lowestPricePlace: string;
  moreInformation: string;
  sku: string;
  nameProduct: string;
  codeCoupon: string;
  information: string;
  status: string;
  store_id: string;
}

class CreateCounterProposalService {
  async execute({
    currentPrice,
    counterOfferPrice,
    name,
    email,
    phone,
    lowestPricePlace,
    moreInformation,
    sku,
    nameProduct,
    codeCoupon,
    information,
    status,
    store_id
  }: ProposalRequest) {

    const counterProposal = await prismaClient.counterProposal.create({
      data: {
        currentPrice: currentPrice,
        counterOfferPrice: counterOfferPrice,
        name: name,
        email: email,
        phone: phone,
        lowestPricePlace: lowestPricePlace,
        moreInformation: moreInformation,
        sku: sku,
        nameProduct: nameProduct,
        codeCoupon: codeCoupon,
        information: information,
        status: status,
        store_id: store_id
      }
    });

    const store = await prismaClient.store.findFirst();

    const firstCounter = await prismaClient.counterProposal.findFirst({
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

    const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/contraproposta.ejs`);

    const data = await ejs.renderFile(requiredPath, {
      id: firstCounter.id,
      nameProduct: firstCounter.nameProduct,
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
      subject: `Contraproposta para o produto ${firstCounter.nameProduct}`,
      html: data
    });

    return counterProposal;

  }
}

export { CreateCounterProposalService }
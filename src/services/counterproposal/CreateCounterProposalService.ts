import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');

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
    })

    await transporter.sendMail({
      from: `Loja Virtual - ${store.name} <${store.email}>`,
      to: `${store.email}`,
      subject: `Contraproposta para o produto ${firstCounter.nameProduct}`,
      html: `
            <article>
                <p>Um cliente acabou de fazer uma contraproposta para o produto ${firstCounter.nameProduct}, clique abaixo para ver os detalhes da contraproposta, e responder o cliente.</p>
                <p><a href="http://localhost:3000/contraproposta/${firstCounter.id}">CLIQUE AQUI</a></p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Loja Virtual ${store.name}</h5>
            </div>`,
    });

    return counterProposal;

  }
}

export { CreateCounterProposalService }
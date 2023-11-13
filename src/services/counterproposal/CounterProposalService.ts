import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface CounterRequest {
    counterproposal_id: string;
    status: string;
    information: string;
    codeCoupon: string;
}

class CounterProposalService {
    async execute({ counterproposal_id, information, codeCoupon, status }: CounterRequest) {
        const counterProposal = await prismaClient.counterProposal.update({
            where: {
                id: counterproposal_id
            },
            data: {
                status: status,
                information: information,
                codeCoupon: codeCoupon
            }
        });

        const store = await prismaClient.store.findFirst();

        const findCounter = await prismaClient.counterProposal.findUnique({
            where: {
                id: counterproposal_id
            }
        });

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 465,
            auth: {
                user: process.env.USER_SMTP,
                pass: process.env.PASS_SMTP
            }
        });

        const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/resposta_contraproposta.ejs`);

        const data = await ejs.renderFile(requiredPath, {
            currentPrice: findCounter.currentPrice,
            counterOfferPrice: findCounter.counterOfferPrice,
            status: findCounter.status,
            codeCoupon: findCounter.codeCoupon,
            information: findCounter.information,
            nameProduct: removerAcentos(findCounter.nameProduct),
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
            to: `${findCounter.email}`,
            subject: `Contraproposta para o produto ${findCounter.nameProduct}`,
            html: `
                  <article>
                      <p>Veja abaixo, nossa resposta para sua contraproposta no produto em nossa loja virtual.</p>
                      <p>Valor do produto: <strong>${findCounter.currentPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</strong></p>
                      <p>Valor que você propôs: <strong>${findCounter.counterOfferPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</strong></p>
                      <p>Sua proposta está: <strong>${findCounter.status}</strong></p>
                      <p>Use o código de cupom de desconto, <strong>${findCounter.codeCoupon}</strong></p>
                      <p>Abaixo nossas considerações:</p>
                      <br/>
                      <p><strong>${findCounter.information}</strong></p>
                      <br/>
                      <p>Caso descorde da nossa resposta a sua contraproposta, faça uma nova contraproposta entrando no link do produto em nossa loja no link abaixo.</p>
                      <p><a href="http://localhost:3001/produto/${removerAcentos(findCounter.nameProduct)}">CLIQUE AQUI - ${findCounter.nameProduct}</a></p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Loja Virtual ${store.name}</h5>
                  </div>`,
        });

        return counterProposal;

    }
}

export { CounterProposalService }
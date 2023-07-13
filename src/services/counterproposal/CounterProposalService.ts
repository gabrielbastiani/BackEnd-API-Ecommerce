import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');

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

        await transporter.sendMail({
            from: "Loja Virtual - Builder Seu Negocio Online <contato@builderseunegocioonline.com.br>",
            to: `${findCounter.email}`,
            subject: `Contraproposta para o produto ${findCounter.nameProduct}`,
            html: `
                  <article>
                      <p>Veja abaixo, nossa resposta para sua contraproposta no produto em nossa loja virtual.</p>
                      <p>Valor do produto: ${findCounter.currentPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</p>
                      <p>Valor que você propôs: ${findCounter.counterOfferPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}.</p>
                      <p>Sua proposta está: <strong>${findCounter.status}</strong></p>
                      <p>Use o código de cupom de desconto, <strong>${findCounter.codeCoupon}</strong></p>
                      <p>Abaixo nossas considerações:</p>
                      <br/>
                      <span>${findCounter.information}</span>
                      <p>Caso descorde da nossa resposta a sua contraproposta, faça uma nova contraproposta entrando no link do produto em nossa loja no link abaixo.</p>
                      <br/>
                      <p><a href="http://localhost:3001/produto/${removerAcentos(findCounter.nameProduct)}">CLIQUE AQUI - ${findCounter.nameProduct}</a></p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Loja Virtual Builder Seu Negocio Online</h5>
                  </div>`,
        });

        return counterProposal;

    }
}

export { CounterProposalService }
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
            html: data
        });

        return counterProposal;

    }
}

export { CounterProposalService }
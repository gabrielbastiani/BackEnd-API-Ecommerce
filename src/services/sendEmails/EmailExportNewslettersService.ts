import nodemailer from "nodemailer";
import prismaClient from "../../prisma";
import ejs from 'ejs';
import path from "path";
import { RoleAdmin } from "@prisma/client";
require('dotenv/config');

class EmailExportNewslettersService {
    async execute() {

        const store = await prismaClient.store.findFirst();
        const superAdmin = await prismaClient.admin.findFirst({
            where: {
                role: RoleAdmin.ADMIN
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

        const requiredPath = path.join(__dirname, `../store/configurations/emailsTransacionais/emails_transacionais/exportar_newslatters.ejs`);

        const data = await ejs.renderFile(requiredPath, {
            name: superAdmin.name,
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
            subject: "Lista de newsletters do Loja",
            html: data,
            attachments: [{
                filename: 'ListagemDeNewslatters.xlsx',
                path: 'ListagemDeNewslatters.xlsx'
            }]
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Lista de <strong>newslatters</strong> enviado com sucesso para o seu email.</strong>.`,
                store_id: store.id
            }
        });

        return {
            message: "Verifique seu E-mail",
        };

    }
}

export { EmailExportNewslettersService }
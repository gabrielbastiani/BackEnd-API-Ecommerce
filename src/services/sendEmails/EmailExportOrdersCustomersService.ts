import nodemailer from "nodemailer";
import prismaClient from "../../prisma";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";
import { RoleAdmin } from "@prisma/client";

class EmailExportOrdersCustomersService {
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

        const requiredPath = path.join(__dirname, `../store/emails_transacionais/exportar_pedidos-clientes.ejs`);

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
            subject: "Lista de pedidos de clientes da Loja Virtual",
            html: data,
            attachments: [{
                filename: 'ListagemDePedidos.xlsx',
                path: 'ListagemDePedidos.xlsx'
            }]
        });

        return {
            message: "Verifique seu E-mail",
        };

    }
}

export { EmailExportOrdersCustomersService }
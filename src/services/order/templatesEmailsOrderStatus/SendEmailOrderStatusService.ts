import prismaClient from "../../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";


class SendEmailOrderStatusService {
    async execute() {

        const store = await prismaClient.store.findFirst();

        const statusDate = await prismaClient.statusOrder.findMany({
            include: {
                order: {
                    include: {
                        customer: true
                    }
                }
            }
        });

        const statusSendEmail = await prismaClient.templateOrderEmail.findMany({
            include: {
                store: true
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

        for (const key in statusDate) {
            if (Object.prototype.hasOwnProperty.call(statusDate, key)) {
                const status_orders = statusDate[key];

                const order = status_orders.status_order;

                for (const key in statusSendEmail) {
                    if (Object.prototype.hasOwnProperty.call(statusSendEmail, key)) {
                        const configs = statusSendEmail[key];

                        const status_config = configs.status_order;
                        const template_status = order;

                        if (template_status === status_config) {

                            if (configs.active === "Sim") {

                                let name_file = configs.slug_name_file_email;
                                const requiredPath = path.join(__dirname, `../templatesEmailsOrderStatus/template_emails_status_order/${name_file}.ejs`);

                                const data = await ejs.renderFile(requiredPath, {
                                    name: status_orders.order.customer.name,
                                    list_product: status_orders.order.cart,
                                    store_address: configs.store.address,
                                    store_cellPhone: configs.store.cellPhone,
                                    store_cep: configs.store.cep,
                                    store_city: configs.store.city,
                                    store_cnpj: configs.store.cnpj,
                                    store_name: configs.store.name,
                                    store_logo: configs.store.logo
                                });

                                await transporter.sendMail({
                                    from: `Loja Virtual - ${store.name} <${store.email}>`,
                                    to: `${status_orders.order.customer.email}`,
                                    subject: `${configs.subject}`,
                                    html: data,
                                });
                            }
                        }
                    }
                }
            }
        }
    }
}

export { SendEmailOrderStatusService }
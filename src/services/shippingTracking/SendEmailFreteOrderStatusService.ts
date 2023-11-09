import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";
import moment from "moment";

interface SendFreteRequest {
    order_id: string;
}

class SendEmailFreteOrderStatusService {
    async execute({ order_id }: SendFreteRequest) {

        const store = await prismaClient.store.findFirst();

        var data = new Date();
        const date_tracking = moment(data).format('DD/MM/YYYY');

        const statusDate = await prismaClient.shippingTracking.findMany({
            where: {
                order_id: order_id
            },
            include: {
                tracking: true,
                order: {
                    include: {
                        customer: true
                    }
                }
            }
        });

        const statusSendEmail = await prismaClient.templateFreteEmail.findMany({
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
                const status_frete = statusDate[key];

                const order = status_frete.tracking[0].status_frete;

                for (const key in statusSendEmail) {
                    if (Object.prototype.hasOwnProperty.call(statusSendEmail, key)) {
                        const configs = statusSendEmail[key];

                        const status_config = configs.status_frete;
                        const template_status = order;

                        if (template_status === status_config) {

                            if (configs.active === "Sim") {

                                let name_file = configs.slug_name_file_email;
                                const requiredPath = path.join(__dirname, `./template_emails_frete_status_order/${name_file}.ejs`);

                                const data = await ejs.renderFile(requiredPath, {
                                    name: status_frete.order.customer.name,
                                    order_id: status_frete.order.id_order_store,
                                    date_tracking: date_tracking,
                                    status_frete: configs.status_frete,
                                    cod_tracking: status_frete.tracking[0].code_tracking,
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
                                    to: `${status_frete.order.customer.email}`,
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

export { SendEmailFreteOrderStatusService }
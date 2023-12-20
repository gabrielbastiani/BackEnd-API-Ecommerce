import prismaClient from "../../prisma";
import nodemailer from "nodemailer";
require('dotenv/config');
import ejs from 'ejs';
import path from "path";
import moment from "moment";

interface Orderrequest {
    statusOrder_id: string;
    status_order: string;
}

class UpdateStatusOrderService {
    async execute({ statusOrder_id, status_order }: Orderrequest) {

        const store = await prismaClient.store.findFirst();

        const orderStatus = await prismaClient.statusOrder.update({
            where: {
                id: statusOrder_id
            },
            data: {
                status_order: status_order
            }
        });

        // SEND EMAIL --

        var data = new Date();
        const date_update = moment(data).format('DD/MM/YYYY');

        const statusDate = await prismaClient.statusOrder.findUnique({
            where: {
                id: statusOrder_id
            },
            include: {
                order: {
                    include: {
                        customer: true,
                        payment: true
                    }
                }
            }
        });

        const statusSendEmail = await prismaClient.templateOrderEmail.findFirst({
            where: {
                status_order: status_order
            },
            orderBy: {
                created_at: 'desc'
            },
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

        let name_file = statusSendEmail.slug_name_file_email;
        const requiredPath = path.join(__dirname, `../order/templatesEmailsOrderStatus/template_emails_status_order/${name_file}.ejs`);

        const response = await ejs.renderFile(requiredPath, {
            name: statusDate.order.customer.name,
            id_order: statusDate.order.id_order_store,
            order_date: moment(statusDate.created_at).format('DD/MM/YYYY HH:mm'),
            data_update_status: date_update,
            type_payment: statusDate.order.payment.type_payment,
            installment: statusDate.order.payment.installment,
            value_pay: statusDate.order.payment.total_payment,
            envio: statusDate.order.data_delivery,
            frete_pay: statusDate.order.frete,
            frete_cupom_pay: statusDate.order.frete_cupom,
            installment_amount: statusDate.order.payment.installment_amount,
            list_product: statusDate.order.cart,
            store_address: statusSendEmail.store.address,
            store_cellPhone: statusSendEmail.store.cellPhone,
            store_cep: statusSendEmail.store.cep,
            store_city: statusSendEmail.store.city,
            store_cnpj: statusSendEmail.store.cnpj,
            store_name: statusSendEmail.store.name,
            store_logo: statusSendEmail.store.logo
        });

        await transporter.sendMail({
            from: `Loja Virtual - ${store.name} <${store.email}>`,
            to: `${statusDate.order.customer.email}`,
            subject: `${statusSendEmail.subject}`,
            html: response,
        });

        await prismaClient.notificationAdmin.create({
            data: {
                user: "EMPLOYEE",
                message: `Status do pedido <strong>${statusDate.order.id_order_store}</strong> foi atualizado.`,
                link: `http://localhost:3000/pedido/${statusDate.order.id}`,
                store_id: store.id
            }
        });

        await prismaClient.notificationCustomer.create({
            data: {
                customer_id: statusDate.order.customer.id,
                message: `Status do pedido <strong>${statusDate.order.id_order_store}</strong> foi alterado, vá até esse pedido e veja o que aconteceu.`,
                store_id: store.id
            }
        });

        if (statusDate.status_order === "CONFIRMED" && statusDate.order.payment.type_payment === "Cartão de Crédito") {

            const typePayment = await prismaClient.typePayment.findFirst();

            await prismaClient.typePayment.update({
                where: {
                    id: typePayment.id
                },
                data: {
                    qtd_type_cartao: {
                        increment: 1
                    }
                }
            });

        } else if (statusDate.status_order === "CONFIRMED" && statusDate.order.payment.type_payment === "Boleto bancário") {

            const typePayment = await prismaClient.typePayment.findFirst();

            await prismaClient.typePayment.update({
                where: {
                    id: typePayment.id
                },
                data: {
                    qtd_type_boleto: {
                        increment: 1
                    }
                }
            });

        } else if (statusDate.status_order === "CONFIRMED" && statusDate.order.payment.type_payment === "PIX") {

            const typePayment = await prismaClient.typePayment.findFirst();

            await prismaClient.typePayment.update({
                where: {
                    id: typePayment.id
                },
                data: {
                    qtd_type_pix: {
                        increment: 1
                    }
                }
            });

        }

        return orderStatus;
    }
}

export { UpdateStatusOrderService }
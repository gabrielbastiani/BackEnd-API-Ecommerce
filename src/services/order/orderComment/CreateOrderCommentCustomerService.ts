import nodemailer from "nodemailer";
import prismaClient from "../../../prisma"; 
require('dotenv/config');
import ejs from 'ejs';
import path from "path";

interface CommentsRequest {
    comment: string;
    order_id: string;
    user_comment: string;
    active: string;
}

class CreateOrderCommentCustomerService {
    async execute({
        comment,
        order_id,
        user_comment,
        active
    }: CommentsRequest) {

        const store = await prismaClient.store.findFirst();

        const comments = await prismaClient.orderComment.create({
            data: {
                order_id: order_id,
                comment: comment,
                user_comment: user_comment,/* @ts-ignore */
                active: active
            }
        });

        const commentsDate = await prismaClient.orderComment.findFirst({
            where: {
                order_id: order_id
            },
            include: {
                order: {
                    include: {
                        customer: true
                    }
                }
            }
        })

        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 465,
            auth: {
                user: process.env.USER_SMTP,
                pass: process.env.PASS_SMTP
            }
        });

        const requiredPath = path.join(__dirname, `../../store/configurations/emailsTransacionais/emails_transacionais/comentario_em_pedido.ejs`);

        const data = await ejs.renderFile(requiredPath, {
            customer: commentsDate.order.customer.name,
            order_id: commentsDate.order.id_order_store,
            id_order: commentsDate.order_id,
            comment: commentsDate.comment,
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
            subject: `Comentario no pedido ${commentsDate.order.id_order_store}`,
            html: data
        });

        await prismaClient.notificationAdmin.create({
            data: {
                message: `Novo comentário feito no pedido de número <strong>${commentsDate.order.id_order_store}</strong>, veja o que foi dito... <a href="http://localhost:3000/pedido/${commentsDate.order_id}>CLIQUE AQUI</a>`,
                store_id: store.id
            }
        });

        return comments;

    }
}

export { CreateOrderCommentCustomerService }
import ejs from "ejs";
import prismaClient from "../../prisma";
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import mercadopago from 'mercadopago';
import path from "path";
mercadopago.configure({ access_token: process.env.ACCESS_TOKEN_TEST });

class PaymentBoletoController {
    async handle(req: Request, res: Response) {

        const store = await prismaClient.store.findFirst();

        mercadopago.payment.create(req.body).then(async function (data) {

            await prismaClient.payment.create({
                data: {
                    customer_id: data.body.metadata.customer_id,
                    store_cart_id: data.body.metadata.store_cart_id,
                    type_payment: "Boleto bancário",
                    transaction_id: data.body.id,
                    total_payment: data.body.transaction_amount,
                    expiration_boleto: data.body.date_of_expiration,
                    external_resource_url: data.body.transaction_details.external_resource_url,
                    store_id: store.id
                }
            });

            const paymentFirst = await prismaClient.payment.findFirst({
                orderBy: {
                    created_at: 'desc'
                }
            });

            const cart = await prismaClient.cart.findMany({
                where: {
                    store_cart_id: data.body.metadata.store_cart_id
                },
                include: {
                    customer: true,
                    product: {
                        include: {
                            photoproducts: true,
                            relationattributeproducts: {
                                include: {
                                    typeAttribute: true,
                                    valueAttribute: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    created_at: 'desc'
                }
            });

            const newCart = await prismaClient.cartTotal.findFirst({
                where: {
                    store_cart_id: data.body.metadata.store_cart_id
                },
                select: {
                    new_value_products: true
                },
                orderBy: {
                    created_at: 'desc'
                }
            });

            /* @ts-ignore */
            let cartNew: any = newCart.new_value_products.length < 1 ? cart : newCart.new_value_products;
            const payFrete: number = data.body.metadata.frete_cupom ? data.body.metadata.frete_cupom : data.body.metadata.frete;

            await prismaClient.order.create({
                data: {
                    customer_id: data.body.metadata.customer_id,
                    deliveryAddressCustomer_id: data.body.metadata.delivery_id,
                    data_delivery: data.body.metadata.order_data_delivery,
                    payment_id: paymentFirst.id,
                    store_cart_id: data.body.metadata.store_cart_id,
                    name_cupom: data.body.metadata.name_cupom,
                    cupom: data.body.metadata.cupom,
                    cart: cartNew,
                    frete: payFrete,
                    weight: data.body.metadata.peso,
                    store_id: store.id
                }
            });

            const orderFirst = await prismaClient.order.findFirst({
                where: {
                    store_cart_id: data.body.metadata.store_cart_id
                },
                orderBy: {
                    created_at: 'desc'
                }
            });

            await prismaClient.statusOrder.create({
                data: {
                    order_id: orderFirst.id,
                    status_order: data.body.status,
                    store_id: store.id
                }
            });

            await prismaClient.shippingTracking.create({
                data: {
                    order_id: orderFirst.id
                }
            });

            // SEND EMAIL --

            const statusDate = await prismaClient.statusOrder.findFirst({
                orderBy: {
                    created_at: 'desc'
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
                    status_order: data.body.status
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
            const requiredPath = path.join(__dirname, `../../services/order/templatesEmailsOrderStatus/template_emails_status_order/${name_file}.ejs`);

            const response = await ejs.renderFile(requiredPath, {
                name: statusDate.order.customer.name,
                id_order: statusDate.order.id_order_store,
                order_date: statusDate.created_at,
                type_payment: statusDate.order.payment.type_payment,
                installment: statusDate.order.payment.installment,
                envio: statusDate.order.data_delivery,
                installment_amount: statusDate.order.payment.total_payment_juros,
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

        }).catch(function (error) {
            console.error(error);
        });

    }
}

export { PaymentBoletoController };
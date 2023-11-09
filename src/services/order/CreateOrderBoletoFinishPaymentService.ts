import prismaClient from "../../prisma";
import ejs from "ejs";
import nodemailer from "nodemailer";
import path from "path";
import moment from "moment";


interface PaymentBoletoRequest {
    customer_id: string;
    transaction_id: string;
    value_pay: number;
    expiration_boleto: string;
    store_cart_id: string;
    external_resource_url: string;
    status_order: string;
    frete_cupom: number;
    frete: number;
    delivery_id: string;
    order_data_delivery: string;
    name_cupom: string;
    cupom: string;
    peso: number;
}

class CreateOrderBoletoFinishPaymentService {
    async execute({
        customer_id,
        transaction_id,
        value_pay,
        status_order,
        expiration_boleto,
        store_cart_id,
        external_resource_url,
        frete_cupom,
        frete,
        delivery_id,
        order_data_delivery,
        name_cupom,
        cupom,
        peso
    }: PaymentBoletoRequest) {

        const store = await prismaClient.store.findFirst();

        await prismaClient.payment.create({
            data: {
                customer_id: customer_id,
                store_cart_id: store_cart_id,
                type_payment: "Boleto bancário",
                transaction_id: transaction_id,
                total_payment: value_pay,
                expiration_boleto: expiration_boleto,
                external_resource_url: external_resource_url,
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
                store_cart_id: store_cart_id
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
                store_cart_id: store_cart_id
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

        await prismaClient.order.create({
            data: {
                customer_id: customer_id,
                deliveryAddressCustomer_id: delivery_id,
                data_delivery: order_data_delivery,
                payment_id: paymentFirst.id,
                store_cart_id: store_cart_id,
                name_cupom: name_cupom,
                cupom: cupom,
                cart: cartNew,
                frete: frete,
                frete_cupom: frete_cupom,
                weight: peso,
                store_id: store.id
            }
        });

        const orderFirst = await prismaClient.order.findFirst({
            where: {
                store_cart_id: store_cart_id
            },
            orderBy: {
                created_at: 'desc'
            }
        });

        await prismaClient.statusOrder.create({
            data: {
                order_id: orderFirst.id,
                status_order: status_order,
                store_id: store.id
            }
        });

        await prismaClient.shippingTracking.create({
            data: {
                order_id: orderFirst.id,
                store_id: store.id
            }
        });

        // DELETE ALL DATAS CART --

        await prismaClient.cart.deleteMany({
            where: {
                store_cart_id: store_cart_id,
            }
        });

        await prismaClient.cartTotal.deleteMany({
            where: {
                store_cart_id: store_cart_id,
            }
        });

        const getFinish = await prismaClient.cartTotalFinish.findMany({
            where: {
                store_cart_id: store_cart_id
            }
        });

        if (getFinish.length >= 1) {
            await prismaClient.cartTotalFinish.deleteMany({
                where: {
                    store_cart_id: store_cart_id,
                }
            });
        }

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

        const respo = await ejs.renderFile(requiredPath, {
            name: statusDate.order.customer.name,
            id_order: statusDate.order.id_order_store,
            order_date: moment(statusDate.created_at).format('DD/MM/YYYY HH:mm'),
            type_payment: statusDate.order.payment.type_payment,
            installment: statusDate.order.payment.installment,
            value_pay: statusDate.order.payment.total_payment,
            value_pay_juros: statusDate.order.payment.total_payment_juros,
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
            html: respo,
        });

    }
}

export { CreateOrderBoletoFinishPaymentService }
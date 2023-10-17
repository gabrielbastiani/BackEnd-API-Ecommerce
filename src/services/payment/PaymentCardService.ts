import prismaClient from "../../prisma";
import ejs from "ejs";
import nodemailer from "nodemailer";
import path from "path";
import moment from "moment";
import axios from 'axios';


interface PaymentRequest {
    customer_id: string;
    value_pay: number;
    store_cart_id: string;
    frete_cupom: number;
    frete: number;
    delivery_id: string;
    order_data_delivery: string;
    name_cupom: string;
    cupom: string;
    peso: number;
}

class PaymentBoletoService {
    async execute({
        customer_id,
        value_pay,
        store_cart_id,
        frete_cupom,
        frete,
        delivery_id,
        order_data_delivery,
        name_cupom,
        cupom,
        peso
    }: PaymentRequest) {

        const store = await prismaClient.store.findFirst();

        const client = await prismaClient.customer.findUnique({
            where: {
                id: customer_id
            }
        });

        var data = new Date();
        var diasASomar = 375;

        data.setDate(data.getDate() + diasASomar);

        const formatData = moment(data).format('YYYY-MM-DD');

        const options = {
            method: 'POST',
            url: process.env.API_ASSAS_CREATE_PAYMENT_BOLETO,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: process.env.TOKEN_ASSAS
            },
            data: {
                billingType: 'BOLETO',
                discount: { value: 10, dueDateLimitDays: 0 },
                interest: { value: 2 },
                fine: { value: 1 },
                customer: client.id_customer_assas,
                dueDate: formatData,
                value: value_pay,
                description: `Pedido na loja ${store.name}`,
                externalReference: store.name,
                postalService: false
            }
        };

        axios
            .request(options)
            .then(async function (response: { data: any; }) {

                await prismaClient.payment.create({
                    data: {
                        customer_id: client.id,
                        store_cart_id: store_cart_id,
                        type_payment: "Boleto bancário",
                        transaction_id: response.data.id,
                        total_payment: response.data.netValue,
                        expiration_boleto: formatData,
                        external_resource_url: response.data.bankSlipUrl,
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
                const payFrete: number = Number(frete_cupom) ? Number(frete_cupom) : Number(frete);

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
                        frete: payFrete,
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
                        status_order: response.data.status,
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
                        status_order: response.data.status
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
                const requiredPath = path.join(__dirname, `../services/order/templatesEmailsOrderStatus/template_emails_status_order/${name_file}.ejs`);

                const respo = await ejs.renderFile(requiredPath, {
                    name: statusDate.order.customer.name,
                    id_order: statusDate.order.id_order_store,
                    order_date: moment(statusDate.created_at).format('DD/MM/YYYY HH:mm'),
                    type_payment: statusDate.order.payment.type_payment,
                    installment: statusDate.order.payment.installment,
                    envio: statusDate.order.data_delivery,
                    frete_pay: statusDate.order.frete,
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
                    html: respo,
                });

            })
            .catch(function (error: any) {
                console.error(error);
            });

    }
}

export { PaymentBoletoService }
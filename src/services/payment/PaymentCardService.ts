import prismaClient from "../../prisma";
import ejs from "ejs";
import nodemailer from "nodemailer";
import path from "path";
import moment from "moment";
import axios from 'axios';


interface PaymentRequest {
    holderName: string;
    number_card: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
    cardholder_identification_cpfCnpj: string;
    cpfCnpj: string;
    customer_id: string;
    value_pay: number;
    installmentCount: number;
    store_cart_id: string;
    frete_cupom: number;
    frete: number;
    delivery_id: string;
    order_data_delivery: string;
    name_cupom: string;
    installmentValue: number;
    cupom: string;
    peso: number;
}

class PaymentCardService {
    async execute({
        holderName,
        number_card,
        expiryMonth,
        expiryYear,
        ccv,
        cardholder_identification_cpfCnpj,
        cpfCnpj,
        customer_id,
        value_pay,
        installmentCount,
        installmentValue,
        store_cart_id,
        frete_cupom,
        frete,
        delivery_id,
        order_data_delivery,
        name_cupom,
        cupom,
        peso
    }: PaymentRequest) {

        function removerAcentos(s: any) {
            return s.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/-{2,}/g, "-")
                .replace(/[/]/g, "-");
        }

        const store = await prismaClient.store.findFirst();

        const client = await prismaClient.customer.findUnique({
            where: {
                id: customer_id
            }
        });

        var data = new Date();
        var diasASomar = 1;

        data.setDate(data.getDate() + diasASomar);

        const formatData = moment(data).format('YYYY-MM-DD');

        const options = {
            method: 'POST',
            url: process.env.API_ASSAS_CREATE_PAYMENT,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: process.env.TOKEN_ASSAS
            },
            data: {
                billingType: 'CREDIT_CARD',
                creditCard: {
                    holderName: holderName,
                    number: number_card,
                    expiryMonth: expiryMonth,
                    expiryYear: expiryYear,
                    ccv: ccv
                },
                creditCardHolderInfo: {
                    name: client.name,
                    email: client.email,
                    cpfCnpj: cpfCnpj,
                    postalCode: client.cep,
                    addressNumber: client.number,
                    phone: removerAcentos(client.phone)
                },
                customer: client.id_customer_assas,
                value: value_pay,
                externalReference: `Pedido na loja ${store.name}`,
                dueDate: diasASomar,
                installmentCount: installmentCount,
                installmentValue: installmentValue
            }
        };

        axios
            .request(options)
            .then(async function (response) {

                console.log(response.data);

                const firstCardNumber: string = response.data.creditCard.creditCardNumber.slice(0, 4);

                await prismaClient.payment.create({
                    data: {
                        customer_id: customer_id,
                        store_cart_id: store_cart_id,
                        type_payment: "Cartão de Crédito",
                        transaction_id: response.data.id,
                        store_id: store.id,
                        first_number_credit_card: firstCardNumber,
                        last_number_credit_card: response.data.creditCard.creditCardNumber,
                        expiration_month: expiryMonth,
                        expiration_year: expiryYear,
                        date_created: response.data.dateCreated,
                        cardholder_name: holderName,
                        cardholder_identification_cpfCnpj: cardholder_identification_cpfCnpj,
                        cardholder_cpfCnpj: cpfCnpj,
                        flag_credit_card: response.data.creditCard.creditCardBrand,
                        installment: installmentCount,
                        installment_amount: installmentValue,
                        total_payment: response.data.value,
                        total_payment_juros: response.data.netValue
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
                const requiredPath = path.join(__dirname, `../order/templatesEmailsOrderStatus/template_emails_status_order/${name_file}.ejs`);

                const data = await ejs.renderFile(requiredPath, {
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
                    html: data,
                });

            })
            .catch(function (error) {
                console.error(error);
            });

    };

}

export { PaymentCardService }
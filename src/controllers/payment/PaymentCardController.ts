import { Request, Response } from "express";
import mercadopago from 'mercadopago';
import prismaClient from "../../prisma";
import { SelectedDelivery } from "@prisma/client";
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentCardController {
    async handle(req: Request, res: Response) {

        mercadopago.payment.save(req.body)
            .then(async function (response) {

                const store = await prismaClient.store.findFirst();

                const { status, status_detail, id } = response.body;

                console.log(response.body)

                await prismaClient.payment.create({
                    data: {
                        customer_id: response.body.metadata.customer_id,
                        store_cart_id: response.body.metadata.store_cart_id,
                        type_payment: "Cartão de Crédito",
                        transaction_id: response.body.id,
                        status: response.body.status,
                        store_id: store.id,/* @ts-ignore */
                        first_number_credit_card: response.body.card.first_six_digits,
                        last_number_credit_card: response.body.card.last_four_digits,
                        expiration_month: response.body.card.expiration_month,
                        expiration_year: response.body.card.expiration_year,
                        date_created: response.body.card.date_created,
                        cardholder_name: response.body.card.cardholder.name,
                        cardholder_identification: response.body.card.cardholder.identification,
                        flag_credit_card: response.body.payment_method_id,
                        installment: response.body.installments,
                        installment_amount: response.body.transaction_details.installment_amount,
                        total_payment: response.body.transaction_amount,
                        total_payment_juros: response.body.transaction_details.total_paid_amount
                    }
                });

                const paymentFirst = await prismaClient.payment.findFirst({
                    orderBy: {
                        created_at: 'desc'
                    }
                });

                const cart = await prismaClient.cart.findMany({
                    where: {
                        store_cart_id: response.body.metadata.store_cart_id
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
                        store_cart_id: response.body.metadata.store_cart_id
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

                const deliverys = await prismaClient.deliveryAddressCustomer.findFirst({
                    where: {
                        customer_id: response.body.metadata.customer_id,
                        deliverySelected: SelectedDelivery.Sim
                    }
                });

                await prismaClient.order.create({
                    data: {
                        customer_id: response.body.metadata.customer_id,
                        deliveryAddressCustomer_id: deliverys.id,
                        data_delivery: response.body.metadata.order_data_delivery,
                        payment_id: paymentFirst.id,
                        store_cart_id: response.body.metadata.store_cart_id,
                        cupom: response.body.metadata.cupom,
                        cart: cartNew,
                        store_id: store.id
                    }
                });

                const orderFirst = await prismaClient.order.findFirst({
                    where: {
                        store_cart_id: response.body.metadata.store_cart_id
                    },
                    orderBy: {
                        created_at: 'desc'
                    }
                });

                await prismaClient.shippingTracking.create({
                    data: {
                        order_id: orderFirst.id,
                        delivery_history: "Processando pedido"
                    }
                });

                res.status(response.status).json({ status, status_detail, id });

            })
            .catch(function (error) {
                console.error(error);
            });

    }
}

export { PaymentCardController };
import { Request, Response } from "express";
import mercadopago from 'mercadopago';
import prismaClient from "../../prisma";
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

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
                    status: data.body.status,
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

            await prismaClient.order.create({
                data: {
                    customer_id: data.body.metadata.customer_id,
                    deliveryAddressCustomer_id: data.body.metadata.delivery_id,
                    data_delivery: data.body.metadata.order_data_delivery,
                    payment_id: paymentFirst.id,
                    store_cart_id: data.body.metadata.store_cart_id,
                    cupom: data.body.metadata.cupom,
                    cart: cartNew,
                    store_id: store.id
                }
            })

        }).catch(function (error) {
            console.error(error);
        });

    }
}

export { PaymentBoletoController };
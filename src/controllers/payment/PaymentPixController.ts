import { Request, Response } from "express";
import mercadopago from 'mercadopago';
import prismaClient from "../../prisma";
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentPixController {
    async handle(req: Request, res: Response) {

        const store = await prismaClient.store.findFirst();

        mercadopago.payment.create(req.body).then(async function (data) {

            console.log(data.body)

            await prismaClient.payment.create({
                data: {
                    customer_id: data.body.metadata.customer_id,
                    store_cart_id: data.body.metadata.store_cart_id,
                    type_payment: "PIX",
                    transaction_id: data.body.id,
                    total_payment: data.body.transaction_amount,
                    status: data.body.status,
                    store_id: store.id,
                    key_payment_pix: data.body.point_of_interaction.transaction_data.qr_code,
                    qr_code_pix: data.body.point_of_interaction.transaction_data.qr_code_base64,
                    key_valid_pix: data.body.date_of_expiration
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

            await prismaClient.shippingTracking.create({
                data: {
                    order_id: orderFirst.id,
                    delivery_history: "Processando pedido"
                }
            });

        }).catch(function (error) {
            console.error(error);
        });

    }
}

export { PaymentPixController };
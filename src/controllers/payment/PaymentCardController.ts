import prismaClient from "../../prisma";
import { Request, Response } from "express";
import axios from 'axios';
import moment from "moment";


class PaymentCardController {
    async handle(req: Request, res: Response) {

        function limparTexto(texto: string) {
            texto = texto.replace(/[-()]/g, '');
            texto = texto.replace(/\s+/g, '');

            return texto;
        }

        const store = await prismaClient.store.findFirst();

        const client = await prismaClient.customer.findUnique({
            where: {
                id: req.body.customer_id
            }
        });

        var data = new Date();
        var diasASomar = 1;

        data.setDate(data.getDate() + diasASomar);

        const formatData = moment(data).format('YYYY-MM-DD');

        const phoneFormated: string = limparTexto(client.phone);

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
                    holderName: req.body.holderName,
                    number: req.body.number_card,
                    expiryMonth: req.body.expiryMonth,
                    expiryYear: req.body.expiryYear,
                    ccv: req.body.ccv
                },
                creditCardHolderInfo: {
                    name: client.name,
                    email: client.email,
                    cpfCnpj: req.body.cpfCnpj,
                    postalCode: client.cep,
                    addressNumber: client.number,
                    phone: phoneFormated
                },
                customer: client.id_customer_assas,
                value: req.body.value_pay,
                externalReference: `Pedido na loja ${store.name}`,
                dueDate: formatData,
                installmentCount: req.body.installmentCount,
                installmentValue: req.body.installmentValue
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                return res.json(response.data);
            })
            .catch(function (error) {
                console.error(error);
                return res.json(error);
            });

    }
}

export { PaymentCardController }
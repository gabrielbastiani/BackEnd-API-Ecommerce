import { Request, Response } from "express";
import axios from "axios";
import prismaClient from "../../prisma";
import moment from "moment";

class PaymentBoletoController {
    async handle(req: Request, res: Response) {

        const store = await prismaClient.store.findFirst();

        const client = await prismaClient.customer.findUnique({
            where: {
                id: req.body.customer_id
            }
        });

        var data = new Date();
        var diasASomar = 4;

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
                billingType: 'BOLETO',
                discount: { value: 3, dueDateLimitDays: 0 },
                interest: { value: 2 },
                fine: { value: 1 },
                customer: client.id_customer_assas,
                dueDate: formatData,
                value: req.body.value_pay,
                description: `Pedido na loja ${store.name}`,
                externalReference: store.name,
                postalService: false
            }
        };

        axios
            .request(options)
            .then(async function (response: { data: any; }) {
                console.log(response.data);
                return res.json(response.data);
            })
            .catch(function (error: any) {
                console.error(error);
                return res.json(error);
            });

    }
}

export { PaymentBoletoController }
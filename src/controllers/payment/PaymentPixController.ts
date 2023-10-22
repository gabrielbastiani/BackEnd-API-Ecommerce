import { Request, Response } from "express";
import prismaClient from "../../prisma";
import moment from "moment";
import axios from "axios";

class PaymentPixController {
    async handle(req: Request, res: Response) {

        const store = await prismaClient.store.findFirst();

        const client = await prismaClient.customer.findUnique({
            where: {
                id: req.body.customer_id
            }
        });

        var data = new Date();
        var diasASomar = 5;

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
                billingType: 'PIX',
                discount: { value: 3, dueDateLimitDays: 0, type: 'PERCENTAGE' },
                interest: { value: 1 },
                fine: { value: 1, type: 'FIXED' },
                customer: client.id_customer_assas,
                value: req.body.value_pay,
                dueDate: formatData,
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

export { PaymentPixController };
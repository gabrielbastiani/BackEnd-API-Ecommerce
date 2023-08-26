import { Request, Response } from "express";
import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentPixController {
    async handle(req: Request, res: Response) {

        mercadopago.payment.create(req.body).then(function (data) {

            console.log(data.body)
            
        }).catch(function (error) {
            console.error(error);
        });

    }
}

export { PaymentPixController };
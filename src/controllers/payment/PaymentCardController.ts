import { Request, Response } from "express";
import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentCardController {
    async handle(req: Request, res: Response) {

        console.log(req.body)

        mercadopago.payment.save(req.body)
            .then(function (response) {

                const { status, status_detail, id } = response.body;

                console.log(response.body)

                res.status(response.status).json({ status, status_detail, id });

            })
            .catch(function (error) {
                console.error(error);
            });

    }
}

export { PaymentCardController };
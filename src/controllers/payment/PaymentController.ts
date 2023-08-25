import { Request, Response } from "express";
/* import { PaymentService } from "../../services/payment/PaymentService"; */
import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentController {
    async handle(req: Request, res: Response) {

        mercadopago.payment.save(req.body)
            .then(function (response) {

                const { status, status_detail, id } = response.body;

                res.status(response.status).json({ status, status_detail, id });

                console.log(status_detail)

            })
            .catch(function (error) {
                console.error(error);
            });

    }
}

export { PaymentController };
import { Request, Response } from "express";
/* import { PaymentService } from "../../services/payment/PaymentService"; */
import mercadopago from 'mercadopago';
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_TEST
});

class PaymentController {
    async handle(req: Request, res: Response) {

        console.log(req.body)

        mercadopago.payment.save(req.body)
        .then(function(response) {
            const { status, status_detail, id } = response.body;
            res.status(response.status).json({ status, status_detail, id });
            console.log(status, status_detail, id)
        })
        .catch(function(error) {
            console.error(error);
        });

    }
}

export { PaymentController };
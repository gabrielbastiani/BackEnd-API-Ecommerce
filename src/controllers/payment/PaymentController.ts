import { Request, Response } from "express";
import { PaymentService } from "../../services/payment/PaymentService";

class PaymentController {
    async handle(req: Request, res: Response) {

        const {
            payment_id,
            unit_price,
            email,
            type_identification,
            type_number
        } = req.body;

        const payments = new PaymentService();

        const paymentsResults = await payments.execute({
            payment_id,
            unit_price,
            email,
            type_identification,
            type_number
        });

        return res.json(paymentsResults);
    }
}

export { PaymentController };
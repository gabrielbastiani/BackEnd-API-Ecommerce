import { Request, Response } from "express";
import { PaymentService } from "../../services/payment/PaymentService";

class PaymentController {
    async handle(req: Request, res: Response) {

        const {
            description,
            email,
            type_identification,
            type_number,
            installments,
            payment_method_id,
            transaction_amount,
            issuer_id,
            unit_price,
        } = req.body;

        const payments = new PaymentService();

        const paymentsResults = await payments.execute({
            description,
            email,
            type_identification,
            type_number,
            installments,
            payment_method_id,
            transaction_amount,
            issuer_id,
            unit_price,
        });

        return res.json(paymentsResults);
    }
}

export { PaymentController };
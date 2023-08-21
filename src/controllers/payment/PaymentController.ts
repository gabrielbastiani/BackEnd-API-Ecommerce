import { Request, Response } from "express";
import { PaymentService } from "../../services/payment/PaymentService";

class PaymentController {
    async handle(req: Request, res: Response) {

        const payments = new PaymentService();

        const paymentsResults = await payments.execute();

        return res.json(paymentsResults);
    }
}

export { PaymentController };
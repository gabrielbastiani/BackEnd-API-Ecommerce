import { Request, Response } from "express";
import { PaymentService } from "../../services/payment/PaymentService";

class PaymentController {
    async handle(req: Request, res: Response) {
        /* const {
            nCdServico,
            sCepDestino,
            nVlPeso,
            nCdFormato,
            nVlComprimento,
            nVlAltura,
            nVlLargura
        } = req.body; */

        const payments = new PaymentService();

        const paymentsResults = await payments.execute();

        return res.json(paymentsResults);
    }
}

export { PaymentController };
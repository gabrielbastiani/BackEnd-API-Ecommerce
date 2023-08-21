import { Request, Response } from "express";
import { WebhookPaymentService } from "../../services/payment/WebhookPaymentService";

class WebhooksPaymentController {
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

        const paymentsHooks = new WebhookPaymentService();

        const hooks = await paymentsHooks.execute();

        return res.json(hooks);
    }
}

export { WebhooksPaymentController };
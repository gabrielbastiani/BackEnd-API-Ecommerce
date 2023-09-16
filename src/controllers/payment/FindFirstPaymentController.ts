import { Request, Response } from 'express';
import { FindFirstPaymentService } from '../../services/payment/FindFirstPaymentService';

class FindFirstPaymentController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const listPay = new FindFirstPaymentService();
        const pay = await listPay.execute({ customer_id });

        return res.json(pay);
    }
}

export { FindFirstPaymentController }
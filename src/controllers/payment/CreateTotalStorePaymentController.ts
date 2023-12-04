import { Request, Response } from 'express';
import { CreateTotalStorePaymentService } from '../../services/payment/CreateTotalStorePaymentService';

class CreateTotalStorePaymentController {
    async handle(req: Request, res: Response) {
        const createTotalStorePaymentService = new CreateTotalStorePaymentService();

        const { total_payment, type_payment } = req.body;

        const payments = await createTotalStorePaymentService.execute({
            total_payment,
            type_payment
        });

        return res.json(payments);
    }
}

export { CreateTotalStorePaymentController }
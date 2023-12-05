import { Request, Response } from 'express';
import { DatesPaymentsService } from '../../services/order/DatesPaymentsService';

class DatesPaymentsController {
    async handle(req: Request, res: Response) {
        const listorders = new DatesPaymentsService();
        const order = await listorders.execute();
        return res.json(order);
    }
}

export { DatesPaymentsController }
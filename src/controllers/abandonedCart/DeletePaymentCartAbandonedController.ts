import { Request, Response } from 'express';
import { DeletePaymentCartAbandonedService } from '../../services/abandonedCart/DeletePaymentCartAbandonedService';

class DeletePaymentCartAbandonedController {
    async handle(req: Request, res: Response) {

        const customer_id = req.query.customer_id as string;

        const listCart = new DeletePaymentCartAbandonedService();
        const cartExist = await listCart.execute({ customer_id });

        return res.json(cartExist);
    }
}

export { DeletePaymentCartAbandonedController }
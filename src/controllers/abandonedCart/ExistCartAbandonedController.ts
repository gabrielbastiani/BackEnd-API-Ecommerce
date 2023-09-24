import { Request, Response } from 'express';
import { ExistCartAbandonedService } from '../../services/abandonedCart/ExistCartAbandonedService';

class ExistCartAbandonedController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;

        const listCart = new ExistCartAbandonedService();
        const cartExist = await listCart.execute({ customer_id });

        return res.json(cartExist);
    }
}

export { ExistCartAbandonedController }
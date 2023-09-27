import { Request, Response } from 'express';
import { FindUniqueCartAbandonedService } from '../../services/abandonedCart/FindUniqueCartAbandonedService';

class FindUniqueCartAbandonedController {
    async handle(req: Request, res: Response) {
        const abandonedCart_id = req.query.abandonedCart_id as string;

        const listCart = new FindUniqueCartAbandonedService();
        const cartExist = await listCart.execute({ abandonedCart_id });

        return res.json(cartExist);
    }
}

export { FindUniqueCartAbandonedController }
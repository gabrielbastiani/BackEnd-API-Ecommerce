import { Request, Response } from 'express';
import { ListExactorderService } from '../../services/order/ListExactorderService';

class ListExactorderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;
        const listorders = new ListExactorderService();
        const order = await listorders.execute({ order_id });

        return res.json(order);
    }
}

export { ListExactorderController }
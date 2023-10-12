import { Request, Response } from 'express';
import { ListExactOrderCommentService } from '../../../services/order/orderComment/ListExactOrderCommentService';

class ListExactOrderCommentController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;
        const listorders = new ListExactOrderCommentService();
        const order = await listorders.execute({ order_id });

        return res.json(order);
    }
}

export { ListExactOrderCommentController }
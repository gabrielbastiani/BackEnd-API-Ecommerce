import { Request, Response } from 'express';
import { UpdateStatusOrderService } from '../../services/order/UpdateStatusOrderService';

class UpdateStatusOrderController {
    async handle(req: Request, res: Response) {
        const statusOrder_id = req.query.statusOrder_id as string;
        const { status_order } = req.body;
        const listorders = new UpdateStatusOrderService();
        const order = await listorders.execute({ statusOrder_id, status_order });

        return res.json(order);
    }
}

export { UpdateStatusOrderController }
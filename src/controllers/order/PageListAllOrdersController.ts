import { Request, Response } from 'express';
import { PageListAllOrdersService } from '../../services/order/PageListAllOrdersService';

class PageListAllOrdersController {
    async handle(req: Request, res: Response) {
        const pageOrders = new PageListAllOrdersService();

        const { page, limit } = req.query;

        const ordersPages = await pageOrders.execute(Number(page), Number(limit));

        return res.json(ordersPages);
    }
}

export { PageListAllOrdersController }
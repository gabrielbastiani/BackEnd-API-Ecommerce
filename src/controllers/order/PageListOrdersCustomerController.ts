import { Request, Response } from 'express';
import { PageListOrdersCustomerService } from '../../services/order/PageListOrdersCustomerService';

class PageListOrdersCustomerController {
    async handle(req: Request, res: Response) {
        const pageOrders = new PageListOrdersCustomerService();

        const { page, limit, customer_id } = req.query;

        const ordersPages = await pageOrders.execute(Number(page), Number(limit), String(customer_id));

        return res.json(ordersPages);
    }
}

export { PageListOrdersCustomerController }
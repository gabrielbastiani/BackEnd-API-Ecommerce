import { Request, Response } from 'express';
import { OrderProductsService } from '../../services/search/OrderProductsService';

class OrderProductsController {
    async handle(req: Request, res: Response) {

        const { page, limit, product_id, sortBy } = req.query;

        const orderProducts = new OrderProductsService();

        const orders = await orderProducts.execute( Number(page), Number(limit), product_id, sortBy );

        return res.json(orders);
    }
}

export { OrderProductsController }
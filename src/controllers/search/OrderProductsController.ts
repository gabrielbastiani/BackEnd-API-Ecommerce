import { Request, Response } from 'express';
import { OrderProductsService } from '../../services/search/OrderProductsService';

class OrderProductsController {
    async handle(req: Request, res: Response) {

        const { sortBy } = req.query;

        const orderProducts = new OrderProductsService();

        const orders = await orderProducts.execute({ sortBy });

        return res.json(orders);
    }
}

export { OrderProductsController }
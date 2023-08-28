import { Request, Response } from 'express';
import { FindCartService } from '../../services/cart/FindCartService';

class FindCartController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        const store_cart_id = req.query.store_cart_id as string;

        const listCart = new FindCartService();
        const cartList = await listCart.execute({
            product_id,
            store_cart_id
        });

        return res.json(cartList);
    }
}

export { FindCartController }
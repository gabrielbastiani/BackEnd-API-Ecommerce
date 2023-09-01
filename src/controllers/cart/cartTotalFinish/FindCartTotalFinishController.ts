import { Request, Response } from 'express';
import { FindCartTotalFinishService } from '../../../services/cart/cartTotalFinish/FindCartTotalFinishService';

class FindCartTotalFinishController {
    async handle(req: Request, res: Response) {
        const store_cart_id = req.query.store_cart_id as string;

        const listCart = new FindCartTotalFinishService();
        const cartList = await listCart.execute({ store_cart_id });

        return res.json(cartList);
    }
}

export { FindCartTotalFinishController }
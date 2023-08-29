import { Request, Response } from 'express';
import { FindCartsTotalService } from '../../../services/cart/cartsTotal/FindCartsTotalService'; 

class FindCartsTotalController {
    async handle(req: Request, res: Response) {
        const store_cart_id = req.query.store_cart_id as string;

        const listCart = new FindCartsTotalService();
        const cartList = await listCart.execute({ store_cart_id });

        return res.json(cartList);
    }
}

export { FindCartsTotalController }
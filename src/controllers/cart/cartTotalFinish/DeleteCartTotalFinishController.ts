import { Request, Response } from 'express';
import { DeleteCartTotalFinishService } from '../../../services/cart/cartTotalFinish/DeleteCartTotalFinishService'; 

class DeleteCartTotalFinishController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const udateCart = new DeleteCartTotalFinishService();

    const cart = await udateCart.execute({ store_cart_id });

    return res.json(cart);

  }
}

export { DeleteCartTotalFinishController }
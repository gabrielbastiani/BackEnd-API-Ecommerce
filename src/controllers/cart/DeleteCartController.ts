import { Request, Response } from 'express';
import { DeleteCartService } from '../../services/cart/DeleteCartService';

class DeleteCartController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const udateCart = new DeleteCartService();

    const cart = await udateCart.execute({ store_cart_id });

    return res.json(cart);

  }
}

export { DeleteCartController }
import { Request, Response } from 'express';
import { ClearCartService } from '../../services/cart/ClearCartService';

class ClearCartController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const udateCart = new ClearCartService();

    const cart = await udateCart.execute({ store_cart_id });

    return res.json(cart);

  }
}

export { ClearCartController }
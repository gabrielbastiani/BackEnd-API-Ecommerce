import { Request, Response } from 'express';
import { DeleteCartService } from '../../services/cart/DeleteCartService';

class DeleteCartController {
  async handle(req: Request, res: Response) {
    const cart_id = req.query.cart_id as string;

    const udateCart = new DeleteCartService();

    const cart = await udateCart.execute({ cart_id });

    return res.json(cart);

  }
}

export { DeleteCartController }
import { Request, Response } from 'express';
import { UpdateCartService } from '../../services/cart/UpdateCartService';

class UpdateCartController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;
    const product_id = req.query.product_id as string;

    const { amount, total, customer_id } = req.body;

    const udateCart = new UpdateCartService();

    const cart = await udateCart.execute({
      store_cart_id,
      product_id,
      amount,
      total,
      customer_id
    });

    return res.json(cart);

  }
}

export { UpdateCartController }
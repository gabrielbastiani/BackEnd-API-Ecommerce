import { Request, Response } from 'express';
import { UpdateCartTotalFinishService } from '../../../services/cart/cartTotalFinish/UpdateCartTotalFinishService'; 

class UpdateCartTotalFinishController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const { totalCartFinish } = req.body;

    const udateCart = new UpdateCartTotalFinishService();

    const cart = await udateCart.execute({
      store_cart_id,
      totalCartFinish
    });

    return res.json(cart);

  }
}

export { UpdateCartTotalFinishController }
import { Request, Response } from 'express';
import { DeleteCartsTotalService } from '../../../services/cart/cartsTotal/DeleteCartsTotalService'; 

class DeleteCartsTotalController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const udateCart = new DeleteCartsTotalService();

    const cart = await udateCart.execute({ store_cart_id });

    return res.json(cart);

  }
}

export { DeleteCartsTotalController }
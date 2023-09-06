import { Request, Response } from 'express';
import { UpdateCartsTotalService } from '../../../services/cart/cartsTotal/UpdateCartsTotalService'; 

class UpdateCartsTotalController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const { total, cep } = req.body;

    const udateCart = new UpdateCartsTotalService();

    const cart = await udateCart.execute({
      store_cart_id,
      total,
      cep
    });

    return res.json(cart);

  }
}

export { UpdateCartsTotalController }
import { Request, Response } from 'express';
import { UpdateCartsTotalService } from '../../../services/cart/cartsTotal/UpdateCartsTotalService'; 

class UpdateCartsTotalController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const { total, cep, frete, coupon } = req.body;

    const udateCart = new UpdateCartsTotalService();

    const cart = await udateCart.execute({
      store_cart_id,
      total,
      cep,
      frete,
      coupon
    });

    return res.json(cart);

  }
}

export { UpdateCartsTotalController }
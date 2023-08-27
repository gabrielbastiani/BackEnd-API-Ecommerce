import { Request, Response } from 'express';
import { UpdateCartService } from '../../services/cart/UpdateCartService';

class UpdateCartController {
  async handle(req: Request, res: Response) {
    const cart_id = req.query.cart_id as string;

    const {
      customer_id,
      product_id,
      image,
      name,
      amount,
      price,
      relationattributeproducts,
      stock,
      weight,
      width,
      height,
      depth,
      total
    } = req.body;

    const udateCart = new UpdateCartService();

    const cart = await udateCart.execute({
      cart_id,
      customer_id,
      product_id,
      image,
      name,
      amount,
      price,
      relationattributeproducts,
      stock,
      weight,
      width,
      height,
      depth,
      total
    });

    return res.json(cart);

  }
}

export { UpdateCartController }
import { Request, Response } from 'express';
import { UpdateCartCustomerService } from '../../services/cart/UpdateCartCustomerService';

class UpdateCartCustomerController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const { customer_id } = req.body;

    const udateCart = new UpdateCartCustomerService();

    const cart = await udateCart.execute({
      store_cart_id,
      customer_id
    });

    return res.json(cart);

  }
}

export { UpdateCartCustomerController }
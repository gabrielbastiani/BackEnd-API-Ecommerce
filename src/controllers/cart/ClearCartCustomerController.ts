import { Request, Response } from 'express';
import { ClearCartCustomerService } from '../../services/cart/ClearCartCustomerService';

class ClearCartCustomerController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const udateCart = new ClearCartCustomerService();

    const cart = await udateCart.execute({store_cart_id});

    return res.json(cart);

  }
}

export { ClearCartCustomerController }
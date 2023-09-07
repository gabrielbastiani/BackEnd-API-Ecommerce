import { Request, Response } from 'express';
import { UpdateCartPaymentCustomerService } from '../../services/cart/UpdateCartPaymentCustomerService';

class UpdateCartPaymentCustomerController {
  async handle(req: Request, res: Response) {
    const store_cart_id = req.query.store_cart_id as string;

    const { customer_id, cep } = req.body;

    const udateCart = new UpdateCartPaymentCustomerService();

    const cart = await udateCart.execute({
      store_cart_id,
      customer_id,
      cep
    });

    return res.json(cart);

  }
}

export { UpdateCartPaymentCustomerController }
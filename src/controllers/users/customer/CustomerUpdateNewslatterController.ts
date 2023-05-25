import { Request, Response } from 'express'
import { CustomerUpdateNewslatterService } from '../../../services/users/customer/CustomerUpdateNewslatterService';

class CustomerUpdateNewslatterController {
  async handle(req: Request, res: Response) {
    const customer_id = req.query.customer_id as string;
    const { newslatter } = req.body;

    const userUpdateNewslatterService = new CustomerUpdateNewslatterService();

    const customer = await userUpdateNewslatterService.execute({
      customer_id,
      newslatter
    });

    return res.json(customer);

  }
}

export { CustomerUpdateNewslatterController }
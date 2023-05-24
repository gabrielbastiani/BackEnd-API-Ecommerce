import { Request, Response } from 'express';
import { DetailCustomerService } from '../../../services/users/customer/DetailCustomerService';

class DetailCustomerController {
  async handle(req: Request, res: Response) {

    const customer_id = req.customer_id as string;

    const detailCustomer = new DetailCustomerService();

    const user = await detailCustomer.execute({ customer_id });

    return res.json(user);

  }
}

export { DetailCustomerController }
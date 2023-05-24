import { Request, Response } from 'express';
import { ActiveOrDesactiveCustomerService } from '../../../services/users/customer/ActiveOrDesactiveCustomerService';

class ActiveOrDesactiveCustomerController {
  async handle(req: Request, res: Response) {
    const customer_id = req.query.customer_id as string;

    const activeCustomer = new ActiveOrDesactiveCustomerService();

    const customer = await activeCustomer.execute({
      customer_id
    });

    return res.json(customer);

  }
}

export { ActiveOrDesactiveCustomerController }
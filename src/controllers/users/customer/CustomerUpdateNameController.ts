import { Request, Response } from 'express';
import { CustomerUpdateNameService } from '../../../services/users/customer/CustomerUpdateNameService';

class CustomerUpdateNameController {
  async handle(req: Request, res: Response) {
    const customer_id = req.query.customer_id as string;

    const { name, slug } = req.body;

    const updateUserService = new CustomerUpdateNameService();

    const userUpdated = await updateUserService.execute({
      customer_id,
      name,
      slug
    });
    return res.json(userUpdated);
  }
}

export { CustomerUpdateNameController }
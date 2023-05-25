import { Request, Response } from 'express';
import { ListExactCustomerService } from '../../../services/users/customer/ListExactCustomerService';

class ListExactCustomerController {
    async handle(req: Request, res: Response) {
        const customer_id = req.query.customer_id as string;
        const listExactUser = new ListExactCustomerService();
        const customer = await listExactUser.execute({ customer_id });

        return res.json(customer);
    }
}

export { ListExactCustomerController }
import { Request, Response } from 'express';
import { ListExactCustomerNameService } from '../../../services/users/customer/ListExactCustomerNameService';

class ListExactCustomerNameController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;
        const listUserExact = new ListExactCustomerNameService();
        const customer = await listUserExact.execute({ slug });

        return res.json(customer);
    }
}

export { ListExactCustomerNameController }
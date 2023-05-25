import { Request, Response } from 'express';
import { PageListAllCustomerService } from '../../../services/users/customer/PageListAllCustomerService';

class PageListAllCustomerController {
    async handle(req: Request, res: Response) {
        const pageCustomers = new PageListAllCustomerService();

        const { page, limit } = req.query;

        const customerPages = await pageCustomers.execute(Number(page), Number(limit));

        return res.json(customerPages);
    }
}

export { PageListAllCustomerController }
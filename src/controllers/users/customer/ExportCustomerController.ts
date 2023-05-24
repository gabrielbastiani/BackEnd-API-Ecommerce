import { Request, Response } from 'express';
import { ExportCustomerService } from '../../../services/users/customer/ExportCustomerService';

class ExportCustomerController {
    async handle(req: Request, res: Response) {
        const listAllUsers = new ExportCustomerService();
        const users = await listAllUsers.execute();

        return res.json(users);
    }
}

export { ExportCustomerController }
import { Request, Response } from 'express';
import { EmailExportCustomerUserService } from '../../services/sendEmails/EmailExportCustomerUserService';

class EmailExportCustomerUserController {
    async handle(req: Request, res: Response) {
        const listAllUsers = new EmailExportCustomerUserService();
        const users = await listAllUsers.execute();

        return res.json(users);
    }
}

export { EmailExportCustomerUserController }
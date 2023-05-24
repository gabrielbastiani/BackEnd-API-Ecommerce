import { Request, Response } from 'express';
import { EmailExportAdminUserService } from '../../services/sendEmails/EmailExportAdminUserService';

class EmailExportAdminUserController {
    async handle(req: Request, res: Response) {
        const listAllUsers = new EmailExportAdminUserService();
        const users = await listAllUsers.execute();

        return res.json(users);
    }
}

export { EmailExportAdminUserController }
import { Request, Response } from 'express';
import { EmailExportUsersService } from '../../services/sendEmails/EmailExportUsersService';

class EmailExportUsersController {
    async handle(req: Request, res: Response) {
        const listAllUsers = new EmailExportUsersService();
        const users = await listAllUsers.execute();

        return res.json(users);
    }
}

export { EmailExportUsersController }
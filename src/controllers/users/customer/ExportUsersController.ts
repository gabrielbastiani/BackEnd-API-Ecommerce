import { Request, Response } from 'express';
import { ExportUsersService } from '../../services/user/ExportUsersService';

class ExportUsersController {
    async handle(req: Request, res: Response) {
        const listAllUsers = new ExportUsersService();
        const users = await listAllUsers.execute();

        return res.json(users);
    }
}

export { ExportUsersController }
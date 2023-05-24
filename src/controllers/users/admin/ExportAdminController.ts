import { Request, Response } from 'express';
import { ExportAdminService } from '../../../services/users/admin/ExportAdminService';

class ExportAdminController {
    async handle(req: Request, res: Response) {
        const listAdmins = new ExportAdminService();
        const admins = await listAdmins.execute();

        return res.json(admins);
    }
}

export { ExportAdminController }
import { Request, Response } from 'express';
import { ListSuperAdminService } from '../../../services/users/admin/ListSuperAdminService';

class ListSuperAdminController {
    async handle(req: Request, res: Response) {
        const listExactAdmin = new ListSuperAdminService();
        const admin = await listExactAdmin.execute();

        return res.json(admin);
    }
}

export { ListSuperAdminController }
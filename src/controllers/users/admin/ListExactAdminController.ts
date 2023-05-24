import { Request, Response } from 'express';
import { ListExactAdminService } from '../../../services/users/admin/ListExactAdminService';

class ListExactAdminController {
    async handle(req: Request, res: Response) {
        const admin_id = req.query.admin_id as string;
        const listExactAdmin = new ListExactAdminService();
        const admin = await listExactAdmin.execute({ admin_id });

        return res.json(admin);
    }
}

export { ListExactAdminController }
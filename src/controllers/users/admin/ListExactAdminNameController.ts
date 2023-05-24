import { Request, Response } from 'express';
import { ListExactAdminNameService } from '../../../services/users/admin/ListExactAdminNameService';

class ListExactAdminNameController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;
        const listExactAdmin = new ListExactAdminNameService();
        const admin = await listExactAdmin.execute({ slug });

        return res.json(admin);
    }
}

export { ListExactAdminNameController }
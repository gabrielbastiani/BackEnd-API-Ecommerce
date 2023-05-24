import { Request, Response } from 'express';
import { PageListAllAdminsService } from '../../../services/users/admin/PageListAllAdminsService';

class PageListAllAdminsController {
    async handle(req: Request, res: Response) {
        const pageListAdmins = new PageListAllAdminsService();

        const { page, limit } = req.query;

        const adminPage = await pageListAdmins.execute(Number(page), Number(limit));

        return res.json(adminPage);
    }
}

export { PageListAllAdminsController }
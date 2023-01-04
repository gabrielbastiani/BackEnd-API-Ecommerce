import { Request, Response } from 'express';
import { PageListAllUsersService } from '../../services/user/PageListAllUsersService';

class PageListAllUsersController {
    async handle(req: Request, res: Response) {
        const pageListAllUsersService = new PageListAllUsersService();

        const { page, limit } = req.query;

        const usersPage = await pageListAllUsersService.execute(Number(page), Number(limit));

        return res.json(usersPage);
    }
}

export { PageListAllUsersController }
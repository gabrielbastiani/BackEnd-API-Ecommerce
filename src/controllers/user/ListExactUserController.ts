import { Request, Response } from 'express';
import { ListExactUserService } from '../../services/user/ListExactUserService';

class ListExactUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.query;
        const listExactUser = new ListExactUserService();
        const users = await listExactUser.execute({ user_id });

        return res.json(users);
    }
}

export { ListExactUserController }
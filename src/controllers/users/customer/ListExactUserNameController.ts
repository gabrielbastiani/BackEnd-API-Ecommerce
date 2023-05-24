import { Request, Response } from 'express';
import { ListExactUserNameService } from '../../services/user/ListExactUserNameService';

class ListExactUserNameController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;
        const listUserExact = new ListExactUserNameService();
        const user = await listUserExact.execute({ slug });

        return res.json(user);
    }
}

export { ListExactUserNameController }
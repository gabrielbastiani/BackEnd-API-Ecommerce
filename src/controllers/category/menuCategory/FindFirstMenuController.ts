import { Request, Response } from 'express';
import { FindFirstMenuService } from '../../../services/category/menuCategory/FindFirstMenuService';

class FindFirstMenuController {
    async handle(req: Request, res: Response) {
        const listFirst = new FindFirstMenuService();
        const menu = await listFirst.execute();

        return res.json(menu);
    }
}

export { FindFirstMenuController }
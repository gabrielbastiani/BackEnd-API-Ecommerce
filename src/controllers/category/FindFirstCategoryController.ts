import { Request, Response } from 'express';
import { FindFirstCategoryService } from '../../services/category/FindFirstCategoryService';

class FindFirstCategoryController {
    async handle(req: Request, res: Response) {
        const listCategoryFirst = new FindFirstCategoryService();
        const category = await listCategoryFirst.execute();

        return res.json(category);
    }
}

export { FindFirstCategoryController }
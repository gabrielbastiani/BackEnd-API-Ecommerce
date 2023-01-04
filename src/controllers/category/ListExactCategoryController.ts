import { Request, Response } from 'express';
import { ListExactCategoryService } from '../../services/category/ListExactCategoryService';

class ListExactCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id } = req.query;
        const listExactCategoryService = new ListExactCategoryService();
        const category = await listExactCategoryService.execute({ category_id });

        return res.json(category);
    }
}

export { ListExactCategoryController }
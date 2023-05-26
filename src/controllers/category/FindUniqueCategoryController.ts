import { Request, Response } from 'express';
import { FindUniqueCategoryService } from '../../services/category/FindUniqueCategoryService';

class FindUniqueCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;
        const listExactCategoryService = new FindUniqueCategoryService();
        const category = await listExactCategoryService.execute({ category_id });

        return res.json(category);
    }
}

export { FindUniqueCategoryController }
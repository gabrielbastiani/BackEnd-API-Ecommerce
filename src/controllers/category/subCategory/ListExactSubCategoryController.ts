import { Request, Response } from 'express';
import { ListExactSubCategoryService } from '../../../services/category/subCategory/ListExactSubCategoryService';

class ListExactSubCategoryController {
    async handle(req: Request, res: Response) {
        const { subcategory_id } = req.query;
        const listExactCategoryService = new ListExactSubCategoryService();
        const category = await listExactCategoryService.execute({ subcategory_id });

        return res.json(category);
    }
}

export { ListExactSubCategoryController }
import { Request, Response } from 'express';
import { FindParentIDCategoryService } from '../../services/category/FindParentIDCategoryService';

class FindParentIDCategoryController {
    async handle(req: Request, res: Response) {
        const parentId = req.query.parentId as string;

        const listCategoryParent = new FindParentIDCategoryService();

        const category = await listCategoryParent.execute({ parentId });

        return res.json(category);
    }
}

export { FindParentIDCategoryController }
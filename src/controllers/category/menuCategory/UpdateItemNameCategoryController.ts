import { Request, Response } from 'express';
import { UpdateItemNameCategoryService } from '../../../services/category/menuCategory/UpdateItemNameCategoryService';

class UpdateItemNameCategoryController {
    async handle(req: Request, res: Response) {
        const menuCategory_id = req.query.menuCategory_id as string;

        const { categoryName } = req.body;

        const nameCategoryItem = new UpdateItemNameCategoryService();

        const item = await nameCategoryItem.execute({
            menuCategory_id,
            categoryName
        });

        return res.json(item);

    }
}

export { UpdateItemNameCategoryController }
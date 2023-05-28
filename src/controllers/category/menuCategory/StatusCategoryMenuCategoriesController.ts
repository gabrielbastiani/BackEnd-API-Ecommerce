import { Request, Response } from 'express'
import { StatusCategoryMenuCategoriesService } from '../../../services/category/menuCategory/StatusCategoryMenuCategoriesService';

class StatusCategoryMenuCategoriesController {
    async handle(req: Request, res: Response) {
        const menuCategory_id = req.query.menuCategory_id as string;

        const menu = new StatusCategoryMenuCategoriesService();

        const menuCategory = await menu.execute({
            menuCategory_id
        });

        return res.json(menuCategory);

    }
}

export { StatusCategoryMenuCategoriesController }
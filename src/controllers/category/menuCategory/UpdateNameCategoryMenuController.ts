import { Request, Response } from 'express';
import { UpdateNameCategoryMenuService } from '../../../services/category/menuCategory/UpdateNameCategoryMenuService';

class UpdateNameCategoryMenuController {
    async handle(req: Request, res: Response) {
        const menuCategory_id = req.query.menuCategory_id as string;

        const { name } = req.body;

        const updateCategory = new UpdateNameCategoryMenuService();

        const category = await updateCategory.execute({
            menuCategory_id,
            name
        });

        return res.json(category);

    }
}

export { UpdateNameCategoryMenuController }
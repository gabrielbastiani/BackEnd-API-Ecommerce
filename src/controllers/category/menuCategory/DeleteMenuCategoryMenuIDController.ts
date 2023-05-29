import { Request, Response } from 'express';
import { DeleteMenuCategoryMenuIDService } from '../../../services/category/menuCategory/DeleteMenuCategoryMenuIDService';

class DeleteMenuCategoryMenuIDController {
    async handle(req: Request, res: Response) {
        const menuCategory_id = req.query.menuCategory_id as string;

        const findMenu = new DeleteMenuCategoryMenuIDService();

        const finds = await findMenu.execute({ menuCategory_id });

        return res.json(finds);
    }
}

export { DeleteMenuCategoryMenuIDController }
import { Request, Response } from 'express';
import { DeleteCategoriesGroupIDService } from '../../../services/category/groupCategory/DeleteCategoriesGroupIDService';

class DeleteCategoriesGroupIDController {
    async handle(req: Request, res: Response) {
        const groupCategoy_id = req.query.groupCategoy_id as string;

        const findsGroups = new DeleteCategoriesGroupIDService();

        const finds = await findsGroups.execute({ groupCategoy_id });

        return res.json(finds);
    }
}

export { DeleteCategoriesGroupIDController }
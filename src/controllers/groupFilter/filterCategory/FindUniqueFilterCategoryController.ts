import { Request, Response } from 'express';
import { FindUniqueFilterCategoryService } from '../../../services/groupFilter/filterCategory/FindUniqueFilterCategoryService';

class FindUniqueFilterCategoryController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const findCategory = new FindUniqueFilterCategoryService();

        const find = await findCategory.execute({
            filterCategory_id,
        });

        return res.json(find);

    }
}

export { FindUniqueFilterCategoryController }
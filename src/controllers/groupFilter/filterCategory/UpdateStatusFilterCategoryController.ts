import { Request, Response } from 'express'
import { UpdateStatusFilterCategoryService } from '../../../services/groupFilter/filterCategory/UpdateStatusFilterCategoryService';

class UpdateStatusFilterCategoryController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const filter = new UpdateStatusFilterCategoryService();

        const category = await filter.execute({
            filterCategory_id
        });

        return res.json(category);

    }
}

export { UpdateStatusFilterCategoryController }
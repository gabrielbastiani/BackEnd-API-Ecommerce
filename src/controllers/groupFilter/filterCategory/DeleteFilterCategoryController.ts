import { Request, Response } from 'express';
import { DeleteFilterCategoryService } from '../../../services/groupFilter/filterCategory/DeleteFilterCategoryService';

class DeleteFilterCategoryController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const deleteFilters = new DeleteFilterCategoryService();

        const deleteFilter = await deleteFilters.execute({
            filterCategory_id,
        });

        return res.json(deleteFilter);

    }
}

export { DeleteFilterCategoryController }
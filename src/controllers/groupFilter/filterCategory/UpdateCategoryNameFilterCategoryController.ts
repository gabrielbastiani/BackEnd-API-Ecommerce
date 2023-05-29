import { Request, Response } from 'express';
import { UpdateCategoryNameFilterCategoryService } from '../../../services/groupFilter/filterCategory/UpdateCategoryNameFilterCategoryService';

class UpdateCategoryNameFilterCategoryController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const { name } = req.body;

        const updateName = new UpdateCategoryNameFilterCategoryService();

        const filter = await updateName.execute({
            filterCategory_id,
            name,
        });

        return res.json(filter);

    }
}

export { UpdateCategoryNameFilterCategoryController }
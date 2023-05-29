import { Request, Response } from 'express';
import { UpdateCategoryOrderFilterService } from '../../../services/groupFilter/filterCategory/UpdateCategoryOrderFilterService';

class UpdateCategoryOrderFilterController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const { order } = req.body;

        const updateFilter = new UpdateCategoryOrderFilterService();

        const filter = await updateFilter.execute({
            filterCategory_id,
            order,
        });

        return res.json(filter);

    }
}

export { UpdateCategoryOrderFilterController }
import { Request, Response } from 'express';
import { FindManyFilterCategoryNameService } from '../../../services/groupFilter/filterCategory/FindManyFilterCategoryNameService';

class FindManyFilterCategoryNameController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const findCategory = new FindManyFilterCategoryNameService();

        const find = await findCategory.execute({
            groupFilter_id,
        });

        return res.json(find);

    }
}

export { FindManyFilterCategoryNameController }
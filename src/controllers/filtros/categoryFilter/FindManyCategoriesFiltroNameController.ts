import { Request, Response } from 'express';
import { FindManyCategoriesFiltroNameService } from '../../../services/filtros/categoryFilter/FindManyCategoriesFiltroNameService';

class FindManyCategoriesFiltroNameController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const findCategory = new FindManyCategoriesFiltroNameService();

        const find = await findCategory.execute({
            groupFilter_id,
        });

        return res.json(find);

    }
}

export { FindManyCategoriesFiltroNameController }
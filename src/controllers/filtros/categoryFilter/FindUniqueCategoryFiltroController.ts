import { Request, Response } from 'express';
import { FindUniqueCategoryFiltroService } from '../../../services/filtros/categoryFilter/FindUniqueCategoryFiltroService';

class FindUniqueCategoryFiltroController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const findCategory = new FindUniqueCategoryFiltroService();

        const find = await findCategory.execute({
            filterCategory_id,
        });

        return res.json(find);

    }
}

export { FindUniqueCategoryFiltroController }
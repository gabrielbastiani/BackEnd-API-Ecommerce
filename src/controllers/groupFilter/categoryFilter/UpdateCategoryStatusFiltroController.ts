import { Request, Response } from 'express'
import { UpdateCategoryStatusFiltroService } from '../../../services/filtros/categoryFilter/UpdateCategoryStatusFiltroService';

class UpdateCategoryStatusFiltroController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const filter = new UpdateCategoryStatusFiltroService();

        const category = await filter.execute({
            filterCategory_id
        });

        return res.json(category);

    }
}

export { UpdateCategoryStatusFiltroController }
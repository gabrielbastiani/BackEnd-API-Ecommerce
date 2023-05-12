import { Request, Response } from 'express';
import { UpdateCategoryOrderFiltroService } from '../../../services/filtros/categoryFilter/UpdateCategoryOrderFiltroService';

class UpdateCategoryOrderFiltroController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const { order } = req.body;

        const updateFilter = new UpdateCategoryOrderFiltroService();

        const filtro = await updateFilter.execute({
            filterCategory_id,
            order,
        });

        return res.json(filtro);

    }
}

export { UpdateCategoryOrderFiltroController }
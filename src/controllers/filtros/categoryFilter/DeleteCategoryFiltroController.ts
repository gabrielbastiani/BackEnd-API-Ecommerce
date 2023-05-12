import { Request, Response } from 'express';
import { DeleteCategoryFiltroService } from '../../../services/filtros/categoryFilter/DeleteCategoryFiltroService';

class DeleteCategoryFiltroController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const deleteFiltro = new DeleteCategoryFiltroService();

        const deleteFilter = await deleteFiltro.execute({
            filterCategory_id,
        });

        return res.json(deleteFilter);

    }
}

export { DeleteCategoryFiltroController }
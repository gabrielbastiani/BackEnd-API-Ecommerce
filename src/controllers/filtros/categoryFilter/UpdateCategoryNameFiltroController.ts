import { Request, Response } from 'express';
import { UpdateCategoryNameFiltroService } from '../../../services/filtros/categoryFilter/UpdateCategoryNameFiltroService';

class UpdateCategoryNameFiltroController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const { categoryName } = req.body;

        const updateName = new UpdateCategoryNameFiltroService();

        const filtro = await updateName.execute({
            filterCategory_id,
            categoryName,
        });

        return res.json(filtro);

    }
}

export { UpdateCategoryNameFiltroController }
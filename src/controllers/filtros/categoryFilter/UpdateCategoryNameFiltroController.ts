import { Request, Response } from 'express';
import { UpdateCategoryNameFiltroService } from '../../../services/filtros/categoryFilter/UpdateCategoryNameFiltroService';

class UpdateCategoryNameFiltroController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const { name } = req.body;

        const updateName = new UpdateCategoryNameFiltroService();

        const filtro = await updateName.execute({
            filterCategory_id,
            name,
        });

        return res.json(filtro);

    }
}

export { UpdateCategoryNameFiltroController }
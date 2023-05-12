import { Request, Response } from 'express';
import { UpdateNameGroupFiltroService } from '../../../services/filtros/categoryFilter/UpdateNameGroupFiltroService';

class UpdateNameGroupFiltroController {
    async handle(req: Request, res: Response) {
        const filterCategory_id = req.query.filterCategory_id as string;

        const { nameGroup } = req.body;

        const updateName = new UpdateNameGroupFiltroService();

        const filtro = await updateName.execute({
            filterCategory_id,
            nameGroup,
        });

        return res.json(filtro);

    }
}

export { UpdateNameGroupFiltroController }
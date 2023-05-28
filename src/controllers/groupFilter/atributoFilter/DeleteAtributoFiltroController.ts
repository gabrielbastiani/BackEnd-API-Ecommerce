import { Request, Response } from 'express';
import { DeleteAtributoFiltroService } from '../../../services/filtros/atributoFilter/DeleteAtributoFiltroService';

class DeleteAtributoFiltroController {
    async handle(req: Request, res: Response) {
        const filterAtributo_id = req.query.filterAtributo_id as string;

        const deleteFiltro = new DeleteAtributoFiltroService();

        const deleteFilter = await deleteFiltro.execute({
            filterAtributo_id,
        });

        return res.json(deleteFilter);

    }
}

export { DeleteAtributoFiltroController }
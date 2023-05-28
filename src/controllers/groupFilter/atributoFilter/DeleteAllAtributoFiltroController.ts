import { Request, Response } from 'express';
import { DeleteAllAtributoFiltroService } from '../../../services/filtros/atributoFilter/DeleteAllAtributoFiltroService';

class DeleteAllAtributoFiltroController {
    async handle(req: Request, res: Response) {
        const atributoName = req.query.atributoName as string;

        const deleteFiltro = new DeleteAllAtributoFiltroService();

        const deleteFilter = await deleteFiltro.execute({
            atributoName,
        });

        return res.json(deleteFilter);

    }
}

export { DeleteAllAtributoFiltroController }
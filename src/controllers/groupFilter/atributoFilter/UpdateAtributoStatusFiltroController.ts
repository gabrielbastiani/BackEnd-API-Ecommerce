import { Request, Response } from 'express'
import { UpdateAtributoStatusFiltroService } from '../../../services/filtros/atributoFilter/UpdateAtributoStatusFiltroService';

class UpdateAtributoStatusFiltroController {
    async handle(req: Request, res: Response) {
        const filterAtributo_id = req.query.filterAtributo_id as string;

        const filter = new UpdateAtributoStatusFiltroService();

        const atributo = await filter.execute({
            filterAtributo_id
        });

        return res.json(atributo);

    }
}

export { UpdateAtributoStatusFiltroController }
import { Request, Response } from 'express';
import { UpdateAtributoNameFiltroService } from '../../../services/filtros/atributoFilter/UpdateAtributoNameFiltroService';

class UpdateAtributoNameFiltroController {
    async handle(req: Request, res: Response) {
        const filterAtributo_id = req.query.filterAtributo_id as string;

        const { groupFilter_id } = req.body;

        const updateName = new UpdateAtributoNameFiltroService();

        const filtro = await updateName.execute({
            filterAtributo_id,
            groupFilter_id,
        });

        return res.json(filtro);

    }
}

export { UpdateAtributoNameFiltroController }
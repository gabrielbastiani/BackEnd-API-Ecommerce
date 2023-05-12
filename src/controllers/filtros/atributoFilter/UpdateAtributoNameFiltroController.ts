import { Request, Response } from 'express';
import { UpdateAtributoNameFiltroService } from '../../../services/filtros/atributoFilter/UpdateAtributoNameFiltroService';

class UpdateAtributoNameFiltroController {
    async handle(req: Request, res: Response) {
        const filterAtributo_id = req.query.filterAtributo_id as string;

        const { atributoName } = req.body;

        const updateName = new UpdateAtributoNameFiltroService();

        const filtro = await updateName.execute({
            filterAtributo_id,
            atributoName,
        });

        return res.json(filtro);

    }
}

export { UpdateAtributoNameFiltroController }
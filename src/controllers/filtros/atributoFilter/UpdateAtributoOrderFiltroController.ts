import { Request, Response } from 'express';
import { UpdateAtributoOrderFiltroService } from '../../../services/filtros/atributoFilter/UpdateAtributoOrderFiltroService';

class UpdateAtributoOrderFiltroController {
    async handle(req: Request, res: Response) {
        const filterAtributo_id = req.query.filterAtributo_id as string;

        const { order } = req.body;

        const updateValor = new UpdateAtributoOrderFiltroService();

        const filtro = await updateValor.execute({
            filterAtributo_id,
            order,
        });

        return res.json(filtro);

    }
}

export { UpdateAtributoOrderFiltroController }
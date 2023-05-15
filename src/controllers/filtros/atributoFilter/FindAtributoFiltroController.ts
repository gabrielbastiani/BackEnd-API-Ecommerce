import { Request, Response } from 'express';
import { FindAtributoFiltroService } from '../../../services/filtros/atributoFilter/FindAtributoFiltroService';

class FindAtributoFiltroController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const findAtributo = new FindAtributoFiltroService();

        const find = await findAtributo.execute({
            groupFilter_id,
        });

        return res.json(find);

    }
}

export { FindAtributoFiltroController }
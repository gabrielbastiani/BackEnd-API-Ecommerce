import { Request, Response } from 'express';
import { FindUniqueAtributoFiltroService } from '../../../services/filtros/atributoFilter/FindUniqueAtributoFiltroService';

class FindUniqueAtributoFiltroController {
    async handle(req: Request, res: Response) {
        const filterAtributo_id = req.query.filterAtributo_id as string;

        const findAtributo = new FindUniqueAtributoFiltroService();

        const find = await findAtributo.execute({
            filterAtributo_id,
        });

        return res.json(find);

    }
}

export { FindUniqueAtributoFiltroController }
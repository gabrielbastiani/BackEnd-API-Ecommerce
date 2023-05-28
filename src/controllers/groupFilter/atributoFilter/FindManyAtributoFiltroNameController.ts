import { Request, Response } from 'express';
import { FindManyAtributoFiltroNameService } from '../../../services/filtros/atributoFilter/FindManyAtributoFiltroNameService';

class FindManyAtributoFiltroNameController {
    async handle(req: Request, res: Response) {
        const groupFilter_id = req.query.groupFilter_id as string;

        const findAtributo = new FindManyAtributoFiltroNameService();

        const find = await findAtributo.execute({
            groupFilter_id,
        });

        return res.json(find);

    }
}

export { FindManyAtributoFiltroNameController }
import { Request, Response } from 'express';
import { FindFirstGroupFiltroService } from '../../../services/atributo/filterGroupAtributo/FindFirstGroupFiltroService';

class FindFirstGroupFiltroController {
    async handle(req: Request, res: Response) {
        const listFirst = new FindFirstGroupFiltroService();
        const group = await listFirst.execute();

        return res.json(group);
    }
}

export { FindFirstGroupFiltroController }
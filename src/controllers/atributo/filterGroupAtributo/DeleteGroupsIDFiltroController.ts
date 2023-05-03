import { Request, Response } from 'express';
import { DeleteGroupsIDFiltroService } from '../../../services/atributo/filterGroupAtributo/DeleteGroupsIDFiltroService';

class DeleteGroupsIDFiltroController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const findsItens = new DeleteGroupsIDFiltroService();

        const finds = await findsItens.execute({ groupFilterAtributo_id });

        return res.json(finds);
    }
}

export { DeleteGroupsIDFiltroController }
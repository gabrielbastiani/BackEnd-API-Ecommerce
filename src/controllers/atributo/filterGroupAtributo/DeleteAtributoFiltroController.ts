import { Request, Response } from 'express';
import { DeleteAtributoFiltroService } from '../../../services/atributo/filterGroupAtributo/DeleteAtributoFiltroService';

class DeleteAtributoFiltroController {
    async handle(req: Request, res: Response) {
        const groupFilterAtributo_id = req.query.groupFilterAtributo_id as string;

        const findsItens = new DeleteAtributoFiltroService();

        const finds = await findsItens.execute({ groupFilterAtributo_id });

        return res.json(finds);
    }
}

export { DeleteAtributoFiltroController }
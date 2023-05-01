import { Request, Response } from 'express';
import { UpdateTipoAtributoService } from '../../services/atributo/UpdateTipoAtributoService';

class UpdateTipoAtributoController {
    async handle(req: Request, res: Response) {
        const atributo_id = req.query.atributo_id as string;

        const { tipo, slug } = req.body;

        const updateTipo = new UpdateTipoAtributoService();

        const atributo = await updateTipo.execute({
            atributo_id,
            tipo,
            slug
        });

        return res.json(atributo);

    }
}

export { UpdateTipoAtributoController }
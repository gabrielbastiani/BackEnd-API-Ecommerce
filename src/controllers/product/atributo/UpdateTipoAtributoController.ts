import { Request, Response } from 'express';
import { UpdateTipoAtributoService } from '../../../services/product/atributo/UpdateTipoAtributoService';

class UpdateTipoAtributoController {
    async handle(req: Request, res: Response) {
        const atributo_id = req.query.atributo_id as string;

        const { tipo, slugTipo } = req.body;

        const updateTipo = new UpdateTipoAtributoService();

        const atributo = await updateTipo.execute({
            atributo_id,
            tipo,
            slugTipo
        });

        return res.json(atributo);

    }
}

export { UpdateTipoAtributoController }
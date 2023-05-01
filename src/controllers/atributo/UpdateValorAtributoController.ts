import { Request, Response } from 'express';
import { UpdateValorAtributoService } from '../../services/atributo/UpdateValorAtributoService';

class UpdateValorAtributoController {
    async handle(req: Request, res: Response) {
        const atributo_id = req.query.atributo_id as string;

        const { valor, slugValor } = req.body;

        const updateValor = new UpdateValorAtributoService();

        const atributo = await updateValor.execute({
            atributo_id,
            valor,
            slugValor
        });

        return res.json(atributo);

    }
}

export { UpdateValorAtributoController }
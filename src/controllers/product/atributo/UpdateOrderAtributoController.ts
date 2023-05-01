import { Request, Response } from 'express';
import { UpdateOrderAtributoService } from '../../../services/product/atributo/UpdateOrderAtributoService';

class UpdateOrderAtributoController {
    async handle(req: Request, res: Response) {
        const atributo_id = req.query.atributo_id as string;

        const { order } = req.body;

        const updateTipo = new UpdateOrderAtributoService();

        const atributo = await updateTipo.execute({
            atributo_id,
            order
        });

        return res.json(atributo);

    }
}

export { UpdateOrderAtributoController }
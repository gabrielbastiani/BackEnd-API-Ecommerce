import { Request, Response } from 'express';
import { UpdateOrderAtributoRelationService } from '../../../services/atributo/relationProductAtributo/UpdateOrderAtributoRelationService';

class UpdateOrderAtributoRelationController {
    async handle(req: Request, res: Response) {
        const relationProductAtributo_id = req.query.relationProductAtributo_id as string;

        const { order } = req.body;

        const updateOrder = new UpdateOrderAtributoRelationService();

        const atributo = await updateOrder.execute({
            relationProductAtributo_id,
            order
        });

        return res.json(atributo);

    }
}

export { UpdateOrderAtributoRelationController }
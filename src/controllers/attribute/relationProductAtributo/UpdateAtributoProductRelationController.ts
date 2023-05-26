import { Request, Response } from 'express';
import { UpdateAtributoProductRelationService } from '../../../services/atributo/relationProductAtributo/UpdateAtributoProductRelationService';

class UpdateAtributoProductRelationController {
    async handle(req: Request, res: Response) {
        const relationProductAtributo_id = req.query.relationProductAtributo_id as string;

        const { atributo_id } = req.body;

        const updateAtributo = new UpdateAtributoProductRelationService();

        const atributo = await updateAtributo.execute({
            relationProductAtributo_id,
            atributo_id
        });

        return res.json(atributo);

    }
}

export { UpdateAtributoProductRelationController }
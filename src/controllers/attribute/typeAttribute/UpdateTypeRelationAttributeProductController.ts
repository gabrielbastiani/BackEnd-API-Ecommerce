import { Request, Response } from 'express';
import { UpdateTypeRelationAttributeProductService } from '../../../services/attribute/typeAttribute/UpdateTypeRelationAttributeProductService';

class UpdateTypeRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

        const { type } = req.body;

        const updateType = new UpdateTypeRelationAttributeProductService();

        const attribute = await updateType.execute({
            relationAttributeProduct_id,
            type
        });

        return res.json(attribute);

    }
}

export { UpdateTypeRelationAttributeProductController }
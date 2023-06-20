import { Request, Response } from 'express';
import { UpdateValueRelationAttributeProductService } from '../../../services/attribute/valueAttribute/UpdateValueRelationAttributeProductService';

class UpdateValueRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

        const { value, slug } = req.body;

        const updateValue = new UpdateValueRelationAttributeProductService();

        const attribute = await updateValue.execute({
            relationAttributeProduct_id,
            value,
            slug
        });

        return res.json(attribute);

    }
}

export { UpdateValueRelationAttributeProductController }
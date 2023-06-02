import { Request, Response } from 'express';
import { UpdateValueRelationAttributeProductService } from '../../../services/product/relationAttributeProduct/UpdateValueRelationAttributeProductService';

class UpdateValueRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

        const { value } = req.body;

        const updateValue = new UpdateValueRelationAttributeProductService();

        const attribute = await updateValue.execute({
            relationAttributeProduct_id,
            value
        });

        return res.json(attribute);

    }
}

export { UpdateValueRelationAttributeProductController }
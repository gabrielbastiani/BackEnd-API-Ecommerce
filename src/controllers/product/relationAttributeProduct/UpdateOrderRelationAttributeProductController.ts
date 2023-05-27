import { Request, Response } from 'express';
import { UpdateOrderRelationAttributeProductService } from '../../../services/product/relationAttributeProduct/UpdateOrderRelationAttributeProductService';

class UpdateOrderRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

        const { order } = req.body;

        const updateOrder = new UpdateOrderRelationAttributeProductService();

        const attribute = await updateOrder.execute({
            relationAttributeProduct_id,
            order
        });

        return res.json(attribute);

    }
}

export { UpdateOrderRelationAttributeProductController }
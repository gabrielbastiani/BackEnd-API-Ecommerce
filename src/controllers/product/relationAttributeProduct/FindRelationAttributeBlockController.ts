import { Request, Response } from 'express';
import { FindRelationAttributeBlockService } from '../../../services/product/relationAttributeProduct/FindRelationAttributeBlockService';

class FindRelationAttributeBlockController {
    async handle(req: Request, res: Response) {
        const findsRelations = new FindRelationAttributeBlockService();

        const product_id = req.query.product_id as string;

        const finds = await findsRelations.execute({ product_id });

        return res.json(finds);
    }
}

export { FindRelationAttributeBlockController }
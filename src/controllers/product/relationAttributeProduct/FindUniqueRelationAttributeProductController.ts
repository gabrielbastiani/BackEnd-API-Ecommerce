import { Request, Response } from 'express';
import { FindUniqueRelationAttributeProductService } from '../../../services/product/relationAttributeProduct/FindUniqueRelationAttributeProductService';

class FindUniqueRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const relationAttributeProduct_id = req.query.relationAttributeProduct_id as string;

        const findsRelations = new FindUniqueRelationAttributeProductService();

        const finds = await findsRelations.execute({ relationAttributeProduct_id });

        return res.json(finds);
    }
}

export { FindUniqueRelationAttributeProductController }
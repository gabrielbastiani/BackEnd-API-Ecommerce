import { Request, Response } from 'express';
import { FindUniqueProductVariationService } from '../../../services/variation/productVariation/FindUniqueProductVariationService';

class FindUniqueProductVariationController {
    async handle(req: Request, res: Response) {
        const productVariation_id = req.query.productVariation_id as string;

        const listVariation = new FindUniqueProductVariationService();

        const variation = await listVariation.execute({ productVariation_id });

        return res.json(variation);
    }
}

export { FindUniqueProductVariationController }
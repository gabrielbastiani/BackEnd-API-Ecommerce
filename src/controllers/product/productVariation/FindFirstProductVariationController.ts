import { Request, Response } from 'express';
import { FindFirstProductVariationService } from '../../../services/product/productVariation/FindFirstProductVariationService';

class FindFirstProductVariationController {
    async handle(req: Request, res: Response) {
        const productVariation_id = req.query.productVariation_id as string;
        const findVariation = new FindFirstProductVariationService();
        const variation = await findVariation.execute({ productVariation_id });

        return res.json(variation);
    }
}

export { FindFirstProductVariationController }
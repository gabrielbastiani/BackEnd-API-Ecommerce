import { Request, Response } from 'express';
import { FindFirstProductVariationService } from '../../../services/variation/productVariation/FindFirstProductVariationService';

class FindFirstProductVariationController {
    async handle(req: Request, res: Response) {
        const variation_id = req.query.variation_id as string;
        const findVariation = new FindFirstProductVariationService();
        const variation = await findVariation.execute({ variation_id });

        return res.json(variation);
    }
}

export { FindFirstProductVariationController }
import { Request, Response } from 'express';
import { FindFirstProductVariationService } from '../../../services/variation/productVariation/FindFirstProductVariationService';

class FindFirstProductVariationController {
    async handle(req: Request, res: Response) {
        const findVariation = new FindFirstProductVariationService();
        const variation = await findVariation.execute();

        return res.json(variation);
    }
}

export { FindFirstProductVariationController }
import { Request, Response } from 'express';
import { FindUniqueVariationService } from '../../services/variation/FindUniqueVariationService';

class FindUniqueVariationController {
    async handle(req: Request, res: Response) {
        const variation_id = req.query.variation_id as string;

        const listVariation = new FindUniqueVariationService();

        const variation = await listVariation.execute({ variation_id });

        return res.json(variation);
    }
}

export { FindUniqueVariationController }
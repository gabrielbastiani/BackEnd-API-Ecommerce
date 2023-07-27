import { Request, Response } from 'express';
import { AllVariationImageService } from '../../services/productVariation/photoVariation/AllVariationImageService';

class AllVariationImageController {
    async handle(req: Request, res: Response) {
        const variation_id = req.query.variation_id as string;

        const listVariation = new AllVariationImageService();

        const variation = await listVariation.execute({ variation_id });

        return res.json(variation);
    }
}

export { AllVariationImageController }
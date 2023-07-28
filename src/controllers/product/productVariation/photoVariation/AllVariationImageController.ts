import { Request, Response } from 'express';
import { AllVariationImageService } from '../../../../services/product/productVariation/photoVariation/AllVariationImageService';

class AllVariationImageController {
    async handle(req: Request, res: Response) {
        const productVariation_id = req.query.productVariation_id as string;

        const listVariation = new AllVariationImageService();

        const variation = await listVariation.execute({ productVariation_id });

        return res.json(variation);
    }
}

export { AllVariationImageController }
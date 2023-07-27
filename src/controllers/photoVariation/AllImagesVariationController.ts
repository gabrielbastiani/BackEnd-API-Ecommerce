import { Request, Response } from 'express';
import { AllImagesVariationService } from '../../services/productVariation/photoVariation/AllImagesVariationService';

class AllImagesVariationController {
    async handle(req: Request, res: Response) {
        const photoVariation_id = req.query.photoVariation_id as string;

        const listVariation = new AllImagesVariationService();

        const variation = await listVariation.execute({ photoVariation_id });

        return res.json(variation);
    }
}

export { AllImagesVariationController }
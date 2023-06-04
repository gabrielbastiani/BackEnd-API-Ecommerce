import { Request, Response } from 'express';
import { FindUniqueImageVariationService } from '../../../services/variation/photoVariation/FindUniqueImageVariationService';

class FindUniqueImageVariationController {
    async handle(req: Request, res: Response) {
        const photoVariation_id = req.query.photoVariation_id as string;

        const listVariation = new FindUniqueImageVariationService();

        const variation = await listVariation.execute({ photoVariation_id });

        return res.json(variation);
    }
}

export { FindUniqueImageVariationController }
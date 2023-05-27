import { Request, Response } from 'express';
import { FindFirstVariationNameService } from '../../services/variation/FindFirstVariationNameService';

class FindFirstVariationNameController {
    async handle(req: Request, res: Response) {
        const slug = req.query.slug as string;
        const findVariation = new FindFirstVariationNameService();
        const variation = await findVariation.execute({ slug });

        return res.json(variation);
    }
}

export { FindFirstVariationNameController }
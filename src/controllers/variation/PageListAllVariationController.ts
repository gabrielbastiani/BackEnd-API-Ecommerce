import { Request, Response } from 'express';
import { PageListAllVariationService } from '../../services/variation/PageListAllVariationService';

class PageListAllVariationController {
    async handle(req: Request, res: Response) {
        const pageVariation = new PageListAllVariationService();

        const { page, limit } = req.query;

        const variation = await pageVariation.execute(Number(page), Number(limit));

        return res.json(variation);
    }
}

export { PageListAllVariationController }
import { Request, Response } from 'express';
import { PageRelationAttributeProductService } from '../../../services/product/relationAttributeProduct/PageRelationAttributeProductService';

class PageRelationAttributeProductController {
    async handle(req: Request, res: Response) {
        const pageAttributes = new PageRelationAttributeProductService();

        const { page, limit } = req.query;

        const pages = await pageAttributes.execute(Number(page), Number(limit));

        return res.json(pages);
    }
}

export { PageRelationAttributeProductController }
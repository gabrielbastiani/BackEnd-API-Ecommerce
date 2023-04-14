import { Request, Response } from 'express';
import { PageRelationsCategorysService } from '../../services/relationProductCategory/PageRelationsCategorysService';

class PageRelationsCategorysController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new PageRelationsCategorysService();

        const { page, limit } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit));

        return res.json(categoyPage);
    }
}

export { PageRelationsCategorysController }
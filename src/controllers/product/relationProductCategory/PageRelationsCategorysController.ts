import { Request, Response } from 'express';
import { PageRelationsCategorysService } from '../../../services/product/relationProductCategory/PageRelationsCategorysService';

class PageRelationsCategorysController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new PageRelationsCategorysService();

        const { page, limit, category_id } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit), String(category_id));

        return res.json(categoyPage);
    }
}

export { PageRelationsCategorysController }
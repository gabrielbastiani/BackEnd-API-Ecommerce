import { Request, Response } from 'express';
import { PageListAllCategorysService } from '../../services/category/PageListAllCategorysService';

class PageListAllCategorysController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new PageListAllCategorysService();

        const { page, limit } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit));

        return res.json(categoyPage);
    }
}

export { PageListAllCategorysController }
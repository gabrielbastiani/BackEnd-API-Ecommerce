import { Request, Response } from 'express';
import { PageListAllSubCategorysService } from '../../../services/category/subCategory/PageListAllSubCategorysService';

class PageListAllSubCategorysController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new PageListAllSubCategorysService();

        const { page, limit } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit));

        return res.json(categoyPage);
    }
}

export { PageListAllSubCategorysController }
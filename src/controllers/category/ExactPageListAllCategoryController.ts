import { Request, Response } from 'express';
import { ExactPageListAllCategorysService } from '../../services/category/ExactPageListAllCategorysService';

class ExactPageListAllCategoryController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new ExactPageListAllCategorysService();

        const { page, limit, category_id } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit), String(category_id));

        return res.json(categoyPage);
    }
}

export { ExactPageListAllCategoryController }
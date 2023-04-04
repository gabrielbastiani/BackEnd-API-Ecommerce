import { Request, Response } from 'express';
import { ExactPageListAllSubCategorysService } from '../../../services/category/subCategory/ExactPageListAllSubCategorysService';

class ExactPageListAllSubCategoryController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new ExactPageListAllSubCategorysService();

        const { page, limit, subcategory_id } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit), String(subcategory_id));

        return res.json(categoyPage);
    }
}

export { ExactPageListAllSubCategoryController }
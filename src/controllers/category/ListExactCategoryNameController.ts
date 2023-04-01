import { Request, Response } from 'express';
import { ListExactCategoryNameService } from '../../services/category/ListExactCategoryNameService';

class ListExactCategoryNameController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new ListExactCategoryNameService();

        const { page, limit, slug } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit), slug);

        return res.json(categoyPage);
    }
}

export { ListExactCategoryNameController }
import { Request, Response } from 'express';
import { ListExactSubCategoryNameService } from '../../../services/category/subCategory/ListExactSubCategoryNameService';

class ListExactSubCategoryNameController {
    async handle(req: Request, res: Response) {
        const pageListAllCategorysService = new ListExactSubCategoryNameService();

        const { page, limit, slug } = req.query;

        const categoyPage = await pageListAllCategorysService.execute(Number(page), Number(limit), slug);

        return res.json(categoyPage);
    }
}

export { ListExactSubCategoryNameController }
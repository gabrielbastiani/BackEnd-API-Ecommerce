import { Request, Response } from 'express';
import { PageFilterCategoryService } from '../../../services/groupFilter/filterCategory/PageFilterCategoryService';

class PageFilterCategoryController {
    async handle(req: Request, res: Response) {
        const pagesCategory = new PageFilterCategoryService();

        const { page, limit } = req.query;

        const categories = await pagesCategory.execute(Number(page), Number(limit));

        return res.json(categories);
    }
}

export { PageFilterCategoryController }
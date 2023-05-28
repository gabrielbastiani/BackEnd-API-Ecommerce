import { Request, Response } from 'express';
import { PageListAllMenuCategoryService } from '../../../services/category/menuCategory/PageListAllMenuCategoryService';

class PageListAllMenuCategoryController {
    async handle(req: Request, res: Response) {
        const pageList = new PageListAllMenuCategoryService();

        const { page, limit } = req.query;

        const menuPage = await pageList.execute(Number(page), Number(limit));

        return res.json(menuPage);
    }
}

export { PageListAllMenuCategoryController }
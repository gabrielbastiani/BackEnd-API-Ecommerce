import { Request, Response } from 'express';
import { PageListAllGroupsCategoriesService } from '../../../services/category/groupCategory/PageListAllGroupsCategoriesService';

class PageListAllGroupsCategoriesController {
    async handle(req: Request, res: Response) {
        const pageList = new PageListAllGroupsCategoriesService();

        const { page, limit } = req.query;

        const groupsPage = await pageList.execute(Number(page), Number(limit));

        return res.json(groupsPage);
    }
}

export { PageListAllGroupsCategoriesController }
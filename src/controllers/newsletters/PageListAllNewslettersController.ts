import { Request, Response } from 'express';
import { PageListAllNewslettersService } from '../../services/newsletters/PageListAllNewslettersService';

class PageListAllNewslettersController {
    async handle(req: Request, res: Response) {
        const pageNesList = new PageListAllNewslettersService();

        const { page, limit } = req.query;

        const newsPage = await pageNesList.execute(Number(page), Number(limit));

        return res.json(newsPage);
    }
}

export { PageListAllNewslettersController }
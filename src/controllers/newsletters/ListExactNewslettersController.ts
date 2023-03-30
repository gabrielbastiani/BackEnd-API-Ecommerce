import { Request, Response } from 'express';
import { ListExactNewslettersService } from '../../services/newsletters/ListExactNewslettersService';

class ListExactNewslettersController {
    async handle(req: Request, res: Response) {
        const { newsletter_id } = req.query;
        const listNews = new ListExactNewslettersService();
        const news = await listNews.execute({ newsletter_id });

        return res.json(news);
    }
}

export { ListExactNewslettersController }
import { Request, Response } from 'express';
import { ExportNewslettersService } from '../../services/newsletters/ExportNewslettersService';

class ExportNewslettersController {
    async handle(req: Request, res: Response) {
        const listAllNews = new ExportNewslettersService();
        const news = await listAllNews.execute();

        return res.json(news);
    }
}

export { ExportNewslettersController }
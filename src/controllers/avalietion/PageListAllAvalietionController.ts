import { Request, Response } from 'express';
import { PageListAllAvalietionService } from '../../services/avalietion/PageListAllAvalietionService';

class PageListAllAvalietionController {
    async handle(req: Request, res: Response) {
        const pageAvalietion = new PageListAllAvalietionService();

        const { page, limit } = req.query;

        const avalietionPage = await pageAvalietion.execute(Number(page), Number(limit));

        return res.json(avalietionPage);
    }
}

export { PageListAllAvalietionController }
import { Request, Response } from 'express';
import { PageFilterAttributeService } from '../../../services/groupFilter/filterAttribute/PageFilterAttributeService';

class PageFilterAttributeController {
    async handle(req: Request, res: Response) {
        const pagesAttributes = new PageFilterAttributeService();

        const { page, limit } = req.query;

        const attributes = await pagesAttributes.execute(Number(page), Number(limit));

        return res.json(attributes);
    }
}

export { PageFilterAttributeController }
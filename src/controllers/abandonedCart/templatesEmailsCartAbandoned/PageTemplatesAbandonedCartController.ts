import { Request, Response } from 'express';
import { PageTemplatesAbandonedCartService } from '../../../services/abandonedCart/templatesEmailsCartAbandoned/PageTemplatesAbandonedCartService';

class PageTemplatesAbandonedCartController {
    async handle(req: Request, res: Response) {
        const templates = new PageTemplatesAbandonedCartService();

        const { page, limit } = req.query;

        const abandonedtemplates = await templates.execute(Number(page), Number(limit));

        return res.json(abandonedtemplates);
    }
}

export { PageTemplatesAbandonedCartController }
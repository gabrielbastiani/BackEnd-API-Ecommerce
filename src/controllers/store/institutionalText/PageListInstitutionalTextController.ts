import { Request, Response } from 'express';
import { PageListInstitutionalTextService } from '../../../services/store/institutionalText/PageListInstitutionalTextService';

class PageListInstitutionalTextController {
    async handle(req: Request, res: Response) {
        const pageText = new PageListInstitutionalTextService();

        const { page, limit } = req.query;

        const textPage = await pageText.execute(Number(page), Number(limit));

        return res.json(textPage);
    }
}

export { PageListInstitutionalTextController }
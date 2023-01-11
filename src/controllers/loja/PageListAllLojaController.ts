import { Request, Response } from 'express';
import { PageListAllLojaService } from '../../services/loja/PageListAllLojaService';

class PageListAllLojaController {
    async handle(req: Request, res: Response) {
        const pageListAllLojaService = new PageListAllLojaService();

        const { page, limit } = req.query;

        const lojaPage = await pageListAllLojaService.execute(Number(page), Number(limit));

        return res.json(lojaPage);
    }
}

export { PageListAllLojaController }
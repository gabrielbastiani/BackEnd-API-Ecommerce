import { Request, Response } from 'express';
import { PageListAllAvaliacaoService } from '../../services/avaliacao/PageListAllAvaliacaoService';

class PageListAllAvaliacaoController {
    async handle(req: Request, res: Response) {
        const pageListAllAvaliacaoService = new PageListAllAvaliacaoService();

        const { page, limit } = req.query;

        const usersPage = await pageListAllAvaliacaoService.execute(Number(page), Number(limit));

        return res.json(usersPage);
    }
}

export { PageListAllAvaliacaoController }
import { Request, Response } from 'express';
import { PageListAllVariacaoService } from '../../services/variacao/PageListAllVariacaoService';

class PageListAllVariacaoController {
    async handle(req: Request, res: Response) {
        const pageListAllVariacaoService = new PageListAllVariacaoService();

        const { page, limit } = req.query;

        const varicaoPage = await pageListAllVariacaoService.execute(Number(page), Number(limit));

        return res.json(varicaoPage);
    }
}

export { PageListAllVariacaoController }
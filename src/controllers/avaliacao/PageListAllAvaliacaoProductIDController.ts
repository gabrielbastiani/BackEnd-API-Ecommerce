import { Request, Response } from 'express';
import { PageListAllAvaliacaoProductIDService } from '../../services/avaliacao/PageListAllAvaliacaoProductIDService';

class PageListAllAvaliacaoProductIDController {
    async handle(req: Request, res: Response) {
        const pageListAllAvaliacaoService = new PageListAllAvaliacaoProductIDService();

        const { page, limit, product_id } = req.query;

        const usersPage = await pageListAllAvaliacaoService.execute(Number(page), Number(limit), String(product_id));

        return res.json(usersPage);
    }
}

export { PageListAllAvaliacaoProductIDController }
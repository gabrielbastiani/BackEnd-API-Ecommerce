import { Request, Response } from 'express';
import { PageListRedesSocialService } from '../../../services/store/socialMedia/PageListRedesSocialService';

class PageListRedesSocialController {
    async handle(req: Request, res: Response) {
        const pageListRedes = new PageListRedesSocialService();

        const { page, limit } = req.query;

        const lojaPage = await pageListRedes.execute(Number(page), Number(limit));

        return res.json(lojaPage);
    }
}

export { PageListRedesSocialController }
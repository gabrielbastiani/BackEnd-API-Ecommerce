import { Request, Response } from 'express';
import { PageListAllAvalietionProductIDService } from '../../services/avalietion/PageListAllAvalietionProductIDService';

class PageListAllAvalietionProductIDController {
    async handle(req: Request, res: Response) {
        const pageList = new PageListAllAvalietionProductIDService();

        const { page, limit, product_id } = req.query;

        const avalietionPage = await pageList.execute(Number(page), Number(limit), String(product_id));

        return res.json(avalietionPage);
    }
}

export { PageListAllAvalietionProductIDController }
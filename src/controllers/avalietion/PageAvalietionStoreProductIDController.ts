import { Request, Response } from 'express';
import { PageAvalietionStoreProductIDService } from '../../services/avalietion/PageAvalietionStoreProductIDService';

class PageAvalietionStoreProductIDController {
    async handle(req: Request, res: Response) {
        const pageList = new PageAvalietionStoreProductIDService();

        const { page, limit, product_id } = req.query;

        const avalietionPage = await pageList.execute(Number(page), Number(limit), String(product_id));

        return res.json(avalietionPage);
    }
}

export { PageAvalietionStoreProductIDController }